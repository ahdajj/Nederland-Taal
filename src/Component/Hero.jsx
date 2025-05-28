import React from 'react';
import './Hero.css' 

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden hero-bg">
       <h1> مرحبًا بكم في منصتنا الأولى من نوعها لتعلّم اللغة الهولندية!   </h1>
        <div className='Para'>
            <p>
            نقدّم لكم تجربة تعليمية متميزة مصممة خصيصًا للناطقين باللغة العربية، لمساعدتكم على تعلم الهولندية بطريقة سهلة ومبسطة.
            سواء كنتم مبتدئين أو ترغبون في تطوير مستواكم، ستجدون هنا دروسًا تفاعلية، شروحات واضحة، وتمارين عملية تساعدكم على إتقان اللغة خطوة بخطوة.
            ابدؤوا رحلتكم معنا اليوم نحو إتقان الهولندية وفتح آفاق جديدة للدراسة والعمل والحياة!
           </p>
        </div>
    </div>
  );
};

export default Hero;


//  <div className="relative h-screen w-full overflow-hidden hero-bg">
//       Video background
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-[-1] vid"
//       >
//         <source src="/videos/videos.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video> 

//       Hero Content
//        <h1> مرحبًا بكم في منصتنا الأولى من نوعها لتعلّم اللغة الهولندية!   </h1>
//         <div className='Para'>
//             <p>
//             نقدّم لكم تجربة تعليمية متميزة مصممة خصيصًا للناطقين باللغة العربية، لمساعدتكم على تعلم الهولندية بطريقة سهلة ومبسطة.
//             سواء كنتم مبتدئين أو ترغبون في تطوير مستواكم، ستجدون هنا دروسًا تفاعلية، شروحات واضحة، وتمارين عملية تساعدكم على إتقان اللغة خطوة بخطوة.
//             ابدؤوا رحلتكم معنا اليوم نحو إتقان الهولندية وفتح آفاق جديدة للدراسة والعمل والحياة!
//            </p>
//         </div>
//     </div>