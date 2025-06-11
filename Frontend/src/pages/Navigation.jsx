import { useState , useEffect} from "react";
import {Outlet, Link } from "react-router-dom"
import { Navbar, Nav, Container ,Button} from 'react-bootstrap';
import Login from '../Component/Login'
import axios from "axios";

function NavBar (){
  const [showModal, setShowModal] = useState(false);
  const [user , setuser]=useState('')

  useEffect(()=>{
    axios.get('http://localhost:3500/getUser' , {
  withCredentials: true
})
    .then(res => { 
      console.log(res.data)
      setuser(res.data)
    })
    .catch(err=>console.log(err))
  },[showModal])

  const HandelClick =()=>{
    setShowModal(true)
  }

  const HandelClose=()=>{
    setShowModal(false)
  }
    return(
    <nav>
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top"  className="mb-4 opacity-75"  dir="rtl">
        <Container>
          <Navbar.Brand  as={Link} to="/"> الصفحة الرئيسية </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="underline" className="mx-auto ">
                <Nav.Link  as={Link} to="/Lessons" > الدروس  </Nav.Link>
                <Nav.Link  as={Link} to="/Exams"> تمارين    </Nav.Link>
                <Nav.Link  as={Link} to="/"> معلومات عن المطورين</Nav.Link>
                </Nav>
          </Navbar.Collapse>
          {user ? <Button variant="outline-light" onClick={HandelClick}>
              تسجيل الخروج
          </Button> :  <Button variant="outline-light" onClick={HandelClick}>
              تسجيل الدخول 
          </Button> }
       
        </Container>
    </Navbar>
    {showModal && <Login onClose={HandelClose}/>}
     <Outlet/>
    </nav>
    )
}
export default NavBar 

  //  <Button variant="outline-light" onClick={HandelClick}>
  //             تسجيل الدخول
  //         </Button>
  //         <Button variant="outline-light" onClick={HandelClick}>
  //             تسجيل الدخول
  //         </Button>
{/*   <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
  <Container className="d-flex align-items-center justify-content-between">

    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>

    <Navbar.Text className="mx-auto text-white">
      Signed in as: <Link to="/" className="text-info text-decoration-none">Mark Otto</Link>
    </Navbar.Text>

    <div className="d-flex align-items-center">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="underline" className="ms-auto">
          <Nav.Link as={Link} to="/">Content</Nav.Link>
          <Nav.Link as={Link} to="/">Exams</Nav.Link>
          <Nav.Link as={Link} to="/">About us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>

  </Container>
</Navbar>*/}