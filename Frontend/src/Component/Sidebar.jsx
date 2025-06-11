import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import PDFViewer from "../Component/Pdfviewr"
import './ComponentStyle.css'


const pdfFiles = [
  { key: "tab1", label: "الدرس 1", file: "./lessons/1.pdf" },
  { key: "tab2", label: "الدرس 2", file: "./lessons/2.pdf" },
  { key: "tab3", label: "الدرس 3", file: "./lessons/3.pdf" },
  { key: "tab4", label: "الدرس 4", file: "./lessons/4.pdf" },
  { key: "tab5", label: "الدرس 5", file: "./lessons/5.pdf" },
];

function Sidebar() {
  return (
    <div className="Sidebar">
    <Tab.Container  defaultActiveKey="first" >
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

  // <Nav.Item>
  //             <Nav.Link eventKey="first">first tab.1</Nav.Link>
  //           </Nav.Item>
  //           <Nav.Item>
  //             <Nav.Link eventKey="second">second tab.2</Nav.Link>
  //           </Nav.Item>

  //  <Tab.Pane eventKey="first">
  //               <PDFViewer file="./lessons/1.pdf"/>
  //             </Tab.Pane>
  //             <Tab.Pane eventKey="second">
  //               <PDFViewer file="./lessons/3.pdf"/>
  //             </Tab.Pane>