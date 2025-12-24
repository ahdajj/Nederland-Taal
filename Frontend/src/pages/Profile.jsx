import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';


const Lessons=[{lessonId:'الدرس الأول' , lessonParts:5 },
               {lessonId:'الدرس الثاني' , lessonParts:4 },
               {lessonId:'الدرس الثالث' , lessonParts:11 },
               {lessonId:'الدرس الرابع' , lessonParts:3 },
               {lessonId:'الدرس الخامس' , lessonParts:5 },
               {lessonId:'الدرس السادس' , lessonParts:3 }]

export default function Profile() {
    const [user , setuser]=useState({})
    const [lessonProgress , setlessonProgress]= useState([])

    useEffect(()=>{
        const fetchingUser = async()=>{
            try{
                const result = await axios.get('http://localhost:3500/api/Profile',{withCredentials:true})
                console.log(result.data)
                setuser(result.data)
                const userLessons = result.data.LessonProgress
                const userExams = result.data.ExamProgress
                const Lessons_score = userLessons.map((item)=>{
                   const  examscore = userExams.find((exam)=>exam.examid===item.examid)
                    if(examscore.examId === item.examId){
                        return {...item , score:examscore.score}
                    } else {
                        return item
                    }
                })
                const progressMap = Lessons_score.reduce((acc, curr) => {               // make lesson progress object of objects 
                    acc[curr.lessonId] = curr;
                    return acc;
                }, {});
                setlessonProgress(progressMap)
            } catch(err){
                console.log(err)
            }
        }
        fetchingUser()
    },[])

  return (
    <div className='Profile'>
      <h1> {user.FullName} مرحباً</h1>

    <Table striped="columns" bordered hover responsive dir='rtl' className='shadow p-3 mb-5 bg-body-tertiary rounded'>
      <thead>
        <tr>
          <th>رقم الدرس </th>
          <th>المنجز </th>
          <th>نتيجة الامتحان</th>
        </tr>
      </thead>
      <tbody>
        {Lessons?.map((item , index)=>(
            <tr>
                <td>{item.lessonId}</td>
                <td>{lessonProgress[item.lessonId] ? <ProgressBar animated 
                        now={lessonProgress[item.lessonId].completedParts.length}
                        max={item.lessonParts} variant={lessonProgress[item.lessonId].isCompleted ? 'success' : ''} /> : '---'}
                </td>
                <td>{lessonProgress[item.lessonId]?.score || '---'}</td>
            </tr>
        ))}
       
      </tbody>
    </Table>
    </div>
  )
}

