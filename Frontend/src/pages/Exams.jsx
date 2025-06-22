import HetEx from "../Component/ExamQuestions"
import ExamBar from'../Component/ExamBar'
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

function Exams(){
    const location=useLocation()
    const Exam=location.state?.Exam
    const [clk,setClk]=useState('')
    const navigate=useNavigate()

    useEffect(()=>{
        console.log(Exam)
    //  setClk(Exam)
    },[])
    

    const HandelClick=(e)=>{
        e.preventDefault()
        const m=e.target.value
        setClk(m)
    }

    const HandleBack=(e)=>{
        if(Exam){
           navigate(-1)
        }
          e.preventDefault()
          setClk('')
          console.log(clk)
    }
    return(
        <div className="Exams" dir="rtl">
            <h1>تمارين </h1>
            <button onClick={HandleBack} disabled={!clk}>Back</button>
            <ExamBar/>
         
        </div>
    )
}
export default Exams