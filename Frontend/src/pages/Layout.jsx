import { useState} from "react";
import {Outlet, Link } from "react-router-dom"
import { Navbar, Nav, Container ,Button} from 'react-bootstrap';
import Login from '../Component/Login'
import { Row, Col } from "react-bootstrap";
import { useAuth } from "../Authentication/AuthContext";
import Logout from "../Component/Logout";

function Layout (){
  const [showModal, setShowModal] = useState(false);
  const {user}=useAuth()


  const HandelClick =()=>{
    setShowModal(true)
  }

  const HandelClose=()=>{
    setShowModal(false)
  }
    return(
    <div className="d-flex flex-column min-vh-100">
      <nav>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top"  className=" opacity-75"  dir="rtl">
          <Container>
            <Navbar.Brand  as={Link} to="/"> الصفحة الرئيسية </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav variant="underline" className="mx-auto ">
                  <Nav.Link  as={Link} to="/Lessons" > الدروس  </Nav.Link>
                  <Nav.Link  as={Link} to="/Exams"> تمارين    </Nav.Link>
                  <Nav.Link  as={Link} to="/Aboutus"> معلومات عن المطورين</Nav.Link>
                  </Nav>
            </Navbar.Collapse>
            {user ? <Logout/> :  <Button variant="outline-light" onClick={HandelClick}>
                تسجيل الدخول 
            </Button> }
          </Container>
      </Navbar>
      {showModal && <Login onClose={HandelClose}/>}
      </nav>

      <main>
        <Outlet/>
      </main>

      <footer className="bg-dark text-light py-3 mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0">© {new Date().getFullYear()} My Website</p>
          </Col>
          <Col md={6}>
            <Nav className="justify-content-center justify-content-md-end">
              <Nav.Item>
                <Nav.Link href="#" className="text-light">Privacy Policy</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-light">Terms of Service</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-light">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
    )
}
export default Layout 