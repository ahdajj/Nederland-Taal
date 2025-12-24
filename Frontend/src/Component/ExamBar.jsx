import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ExamQuestions from './ExamQuestions'
import './ComponentStyle.css'
import question1 from './lesonComponent/Exam1'
import question2 from './lesonComponent/Exam2'
import question3 from './lesonComponent/Exam3'
import question4 from './lesonComponent/Exam4'
import question6 from './lesonComponent/Exam6'
import { useLocation } from 'react-router-dom';


const ExamQ =[
      { key: "Exam1", label: "تمارين الدرس 1", questions: question1 },
      { key: "Exam2", label: "تمارين الدرس 2", questions: question2 },
      { key: "Exam3", label: "تمارين الدرس 3", questions: question3 },
      { key: "Exam4", label: "تمارين الدرس 4", questions: question4 },
      { key: "Exam6", label: "تمارين الدرس 6", questions: question6 },
]
function ExamBar() {
    const location=useLocation()
    const Exam=location.state?.Exam
  return (
    <div className="ExamBar">
    <Tab.Container  defaultActiveKey={Exam} >
      <Row className='m-0'>
        <Col sm={3} className='bg-secondary bg-gradient  bg-opacity-10 text-end py-4 mx-4 rounded-4' style={{ height: "40vh", overflowY: "auto" }}>
         <h2>المحتوى</h2>
          <Nav variant="pills" className="flex-column">
            {ExamQ.map((item , index)=>{
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
            {ExamQ.map((item)=>{
              return(
                <Tab.Pane eventKey={item.key}>
                 <ExamQuestions exam={item.questions}  examId={item.key}/>
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

export default ExamBar;

 