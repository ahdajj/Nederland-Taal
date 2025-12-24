import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import PDFViewer from "../Pdfviewr"
import { Link } from 'react-router-dom';
import '../ComponentStyle.css'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useAuth } from '../../Authentication/AuthContext';

const pdfFiles = [
  { key: "tab1", label: "الجزء 1", file: "./lessons/lesson6/1.pdf" },
  { key: "tab2", label: "الجزء 2", file: "./lessons/lesson6/2.pdf" },
  { key: "tab3", label: "الجزء 3", file: "./lessons/lesson6/3.pdf" },
];


function Sidebar() {
   const [track , setTrack]=useState({lessonId:'الدرس السادس',completedParts:["الجزء 1"],isCompleted:false ,totalParts:pdfFiles.length ,examId:'Exam6' })
    const {user}=useAuth()
  
      const  fetching =async () =>{
           try{
            const res= await axios.post('http://localhost:3500/api/Lessonprogress',track ,{withCredentials:true})
            console.log(res.data)
        } catch(err){
          console.log(err)
        }
        }
  
    useEffect(()=>{
      if(user){
          fetching()
      }
  
    },[track])
  
    const HandleClick = (less)=>{
         if (!track.completedParts.includes(less)) {
            const updatedParts = [...track.completedParts, less];
            const isDone = updatedParts.length === pdfFiles.length;
            setTrack(prev => ({
              ...prev,
              completedParts: updatedParts,
              isCompleted: isDone
            }));
    }
    }
  return (
    <div className="Sidebar">
    <Tab.Container  defaultActiveKey="tab1" >
      <Row className='m-0'>
        <Col sm={3} className='bg-secondary bg-gradient  bg-opacity-10 text-end py-4 mx-4 rounded-4' style={{ maxHeight: "50vh", overflowY: "auto" }}>
         <h2>المحتوى</h2>
          <Nav variant="pills" className="flex-column">
            {pdfFiles.map((item , index)=>{
              return(
                <Nav.Item key={index}>
                  <Nav.Link eventKey={item.key} onClick={()=>HandleClick(item.label)}>{item.label}</Nav.Link>
                </Nav.Item>
              )
            })}
            <Nav.Item>
                <Nav.Link as={Link} to='/Exams' state={{Exam:'Exam1'}}> تمارين </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8} className='opacity-75'>
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