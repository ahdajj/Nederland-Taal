import ExamBar from'../Component/ExamBar'


function Exams(){
    return(
        <div className="Exams" dir="rtl">
            <h1>تمارين </h1>
            <ExamBar/>
        </div>
    )
}
export default Exams



///////////////////////////////// Back button 
// import { useNavigate, useLocation } from "react-router-dom"
// import { useEffect, useState } from "react"
//   const [clk,setClk]=useState('')
//   const navigate=useNavigate()
//   const location=useLocation()
//   const Exam=location.state?.Exam
//       useEffect(()=>{
//         console.log(Exam)
//     //  setClk(Exam)
//     },[])
    
//        const HandleBack=(e)=>{
//         if(Exam){
//            navigate(-1)
//         }
//           e.preventDefault()
//           setClk('')
//           console.log(clk)
//     }

//     <button onClick={HandleBack} disabled={!clk}>Back</button>