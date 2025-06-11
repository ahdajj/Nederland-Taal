import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import PDFViewer from "../Pdfviewr"
import { Link } from 'react-router-dom';
import '../ComponentStyle.css'

const pdfFiles = [
  { key: "tab1", label: "الجزء 1", file: "./lessons/lesson3/1.pdf" },
  { key: "tab2", label: "الجزء 2", file: "./lessons/lesson3/2.pdf" },
  { key: "tab3", label: "الجزء 3", file: "./lessons/lesson3/3.pdf" },
  { key: "tab4", label: "الجزء 4", file: "./lessons/lesson3/4.pdf"  },
];

function Sidebar() {
  return (
    <div className="Sidebar">
    <Tab.Container  defaultActiveKey="tab1" >
      <Row>
        <Col sm={3} className='bg-secondary bg-gradient  bg-opacity-10 text-end py-4 mx-4 rounded-4' style={{ maxHeight: "50vh", overflowY: "auto" }}>
         <h2>المحتوى</h2>
          <Nav variant="pills" className="flex-column">
            {pdfFiles.map((item , index)=>{
              return(
                <Nav.Item key={index}>
                  <Nav.Link eventKey={item.key}>{item.label}</Nav.Link>
                </Nav.Item>
              )
            })}
           <Nav.Item>
                <Nav.Link as={Link} to='/Exams' state={{Exam:'Exam3'}}> تمارين </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {pdfFiles.map((item)=>{
              return(
                <Tab.Pane eventKey={item.key}>
                  <PDFViewer file={item.file}/>
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