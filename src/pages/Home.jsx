import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom"
import Hero from '../Component/Hero'

const SVG=[<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-mortarboard-fill " viewBox="0 0 16 16">
    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
  </svg> ,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
    <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
  </svg> ,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-windows  " viewBox="0 0 16 16">
    <path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z"/>
  </svg>,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-box-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
  </svg>, ]

function Home (){
return(
    <div className="Home" dir="rtl">
    <h1>الصفحة الرئيسية  </h1>
    <div className='Para'>
        <p>
            مرحبًا بكم في منصتنا الأولى من نوعها لتعلّم اللغة الهولندية!
        </p>
        <p>
            نقدّم لكم تجربة تعليمية متميزة مصممة خصيصًا للناطقين باللغة العربية، لمساعدتكم على تعلم الهولندية بطريقة سهلة ومبسطة.
            سواء كنتم مبتدئين أو ترغبون في تطوير مستواكم، ستجدون هنا دروسًا تفاعلية، شروحات واضحة، وتمارين عملية تساعدكم على إتقان اللغة خطوة بخطوة.
            ابدؤوا رحلتكم معنا اليوم نحو إتقان الهولندية وفتح آفاق جديدة للدراسة والعمل والحياة!
        </p>
    </div>
    <Container className='d-flex flex-wrap  justify-content-center'>
    <Card className="text-center m-4 shadow " bg='success' border="success"  style={{ width: '30%' }} as={Link} to="/Content">
      <Card.Body>
        <Card.Title>{SVG[0]}</Card.Title>
        <Card.Text>
         ابدأ الدراسة
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="text-center  m-4 shadow"   bg='info' border="info" style={{ width: '30%' }} as={Link} to="/Exams">
      <Card.Body>
        <Card.Title>{SVG[1]}</Card.Title>
        <Card.Text>
         الإمتحانات
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="text-center  m-4 shadow " bg='warning' border="warning"  style={{ width: '30%' }}>
      <Card.Body>
        <Card.Title>{SVG[2]}</Card.Title>
        <Card.Text>
         قريبا....
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="text-center  m-4 shadow" bg='light' border="light" style={{ width: '30%' }}>
      <Card.Body>
        <Card.Title>{SVG[3]}</Card.Title>
        <Card.Text>
        قريبا....
        </Card.Text>
      </Card.Body>
    </Card>
    </Container>
    </div>  
)
}
export default Home