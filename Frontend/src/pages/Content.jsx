import { useLocation } from "react-router-dom"
import { Suspense, lazy } from 'react';


const components = {
  lesson1: lazy(() => import('../Component/lesonComponent/lesson1')),
  lesson2: lazy(() => import('../Component/lesonComponent/lesson2')),
  lesson3: lazy(() => import('../Component/lesonComponent/lesson3')),
};

function Content (){
    const location=useLocation()
    const Lesson=location.state.lesson
    const LessonComponent = components[Lesson];
    
    return (
        <div className="Content" dir="rtl">
            <h1>المحتوى</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {LessonComponent ? <LessonComponent /> : <p>الدرس غير متوفر</p>}
            </Suspense>
        </div>
    )
}
export default Content


