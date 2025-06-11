import HetEx from "../Component/ExamStand"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

function Exams(){
    const location=useLocation()
    const Exam=location.state?.Exam
    const [clk,setClk]=useState('')
    const navigate=useNavigate()

    useEffect(()=>{
     setClk(Exam)
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
        <div className="Exams">
            <h1>تمارين </h1>
            <button onClick={HandleBack} disabled={!clk}>Back</button>
            {clk ? <HetEx exam={clk} /> :
                <div>
                    <button value='Exam1' onClick={HandelClick}>Exam1</button>
                    <button value='Exam2' onClick={HandelClick}>Exam2</button>
                    <button value='Exam3' onClick={HandelClick}>Exam3</button>
                </div>
            }
        </div>
    )
}
export default Exams