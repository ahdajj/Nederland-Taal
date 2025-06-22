import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Examquetions from './ExamQuestions'
import './ComponentStyle.css'
import question1 from './lesonComponent/Exam1'
import question2 from './lesonComponent/Exam2'
import question3 from './lesonComponent/Exam3'
import { useLocation } from 'react-router-dom';


const ExamqQ =[
      { key: "Exam1", label: "تمارين الدرس 1", questions: question1 },
      { key: "Exam2", label: "تمارين الدرس 2", questions: question2 },
      { key: "Exam3", label: "تمارين الدرس 3", questions: question3 },
]
function Sidebar() {
    const location=useLocation()
    const Exam=location.state?.Exam
    console.log(Exam)
  return (
    <div className="Sidebar">
    <Tab.Container  defaultActiveKey={Exam} >
      <Row>
        <Col sm={3} className='bg-secondary bg-gradient  bg-opacity-10 text-end py-4 mx-4 rounded-4' style={{ maxHeight: "50vh", overflowY: "auto" }}>
         <h2>المحتوى</h2>
          <Nav variant="pills" className="flex-column">
            {ExamqQ.map((item , index)=>{
              return(
                <Nav.Item key={index}>
                  <Nav.Link eventKey={item.key}>{item.label}</Nav.Link>
                </Nav.Item>
              )
            })}
          </Nav>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {ExamqQ.map((item)=>{
              return(
                <Tab.Pane eventKey={item.key}>
                 <Examquetions exam={item.questions}/>
                </Tab.Pane>
              )  
              })}
             
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
  
}

export default Sidebar;

 