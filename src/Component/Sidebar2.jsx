import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Sidebar() {
    const q=[1,2,3,4,5,6,7,8,9]
    
    return (
      <div className="Sidebar">
      <Tab.Container  defaultActiveKey="first" >
        <Row>
          <Col sm={8}>
          <Tab.Content>
            {q.map((index)=>{
                 return(
                <Tab.Pane eventKey={index}>
                    {index} tab content
                  </Tab.Pane>
                 )
            })}
             
             
            </Tab.Content>
          </Col>
          <Col sm={3} className='bg-secondary bg-gradient  bg-opacity-10 text-end py-4 mx-1 rounded-4' style={{ maxHeight: "50vh", overflowY: "auto" }}>
           <h2>Content</h2>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="1">first tab.1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">second tab.2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
      </div>
    );
    
  }
  
  export default Sidebar;