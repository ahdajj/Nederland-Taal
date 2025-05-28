import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import PDFViewer from "../Component/Pdfviewr"


function Sidebar() {
  return (
    <div className="Sidebar">
    <Tab.Container  defaultActiveKey="first" >
      <Row>
        <Col sm={3} className='bg-secondary bg-gradient  bg-opacity-10 text-end py-4 mx-4 rounded-4' style={{ maxHeight: "50vh", overflowY: "auto" }}>
         <h2>المحتوى</h2>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">first tab.1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">second tab.2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8}>
        <Tab.Content>
            <Tab.Pane eventKey="first">
            <PDFViewer file="use.pdf"/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
  
}

export default Sidebar;
