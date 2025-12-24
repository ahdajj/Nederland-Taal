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
  { key: "tab1", label: "الجزء 1", file: "./lessons/lesson2/1.pdf" },
  { key: "tab2", label: "الجزء 2", file: "./lessons/lesson2/2.pdf" },
  { key: "tab3", label: "الجزء 3", file: "./lessons/lesson2/3.pdf" },
  { key: "tab4", label: "الجزء 4", file: "./lessons/lesson2/4.pdf"  },
  { key: "tab5", label: "الجزء 5", file: "./lessons/lesson2/5.pdf"  },
  { key: "tab6", label: "الجزء 6", file: "./lessons/lesson2/6.pdf" },
  { key: "tab7", label: "الجزء 7", file: "./lessons/lesson2/7.pdf" },
  { key: "tab8", label: "الجزء 8", file: "./lessons/lesson2/8.pdf" },
  { key: "tab9", label: "الجزء 9", file: "./lessons/lesson2/9.pdf"  },
  { key: "tab10", label: "الجزء `10", file: "./lessons/lesson2/10.pdf" },
  { key: "tab11", label: "الجزء 11", file: "./lessons/lesson2/11.pdf"  },
];

function Sidebar() {
   const [track , setTrack]=useState({lessonId:'الدرس الثاني',completedParts:["الجزء 1"],isCompleted:false ,totalParts:pdfFiles.length ,examId:'Exam2' })
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