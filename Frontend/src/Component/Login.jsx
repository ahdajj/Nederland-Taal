import { useState , useEffect } from "react";
import axios from "axios";
import CloseButton from 'react-bootstrap/CloseButton';
import './ComponentStyle.css'


const Svg=[<svg className="input-icon bi bi-person-fill" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>,<svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
<path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
</svg>, <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
</svg> ]

export default function FlipCardModal({ onClose }) {
  const [user , setuser]=useState({Email:'' ,Password:'' })
  const [newUser , setnewUser] = useState({FullName:'', Email:'',Password:''})
  const [flipped, setFlipped] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

 const Signup =()=>{
    axios.post('http://localhost:3500/Signup' , newUser)
    .then(res=>{
        console.log(res.data)
        setStatus({type:'success' , message:'User Saved'})
        setTimeout(()=>{
        setFlipped(!flipped)
        setStatus({ type: '', message: '' })
        setnewUser({FullName:'', Email:'',Password:''})
        },1000)
    })
    .catch(err => setStatus({ type: 'error', message: err.response.data }));
 }

 const LogIn=()=>{
    axios.post('http://localhost:3500/logIn', user ,{
  withCredentials: true
})
    .then(res=>{
        console.log(res)
        setuser({Email:'',Password:''})
        onClose()
    })
     .catch(err => setStatus({ type: 'error', message: err.response.data }));
 }

  const HandelSignup=(e)=>{
    e.preventDefault()
    Signup()
  }

  const HandelLogin=(e)=>{
    e.preventDefault()
    LogIn()
  }

   const HandelChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setnewUser((prev)=>({...prev,[name]:value}))
  }

  const HandelChange2=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setuser((prev)=>({...prev,[name]:value}))
  }
  
  const HandelFlip = (e)=>{
    e.preventDefault()
    setFlipped(!flipped)
    setStatus({ type: '', message: '' })
  }

  return (
    <div className="modal-overlay">
        <div className="flip-card ">
            <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
                <div className="flip-card-front">
                        <form className="form">
                            <CloseButton aria-label="close" className="close" onClick={onClose} variant='white' />
                            <p id="heading">Login</p>
                            <div className="field">
                               {Svg[1]}
                                <input autoComplete="off" placeholder="Username" className="input-field" type="text" name="Email" value={user.Email} onChange={HandelChange2}/>
                            </div>
                            <div className="field">
                                {Svg[2]}
                                <input placeholder="Password" className="input-field" type="password" name="Password" value={user.Password} onChange={HandelChange2}/>
                            </div>
                            {status.type === 'error' && <p style={{color:'red'}}>{status.message}</p>}
                            <div className="btn">
                                <button className="button1" onClick={HandelLogin}>&nbsp;&nbsp;Login&nbsp;&nbsp;</button>
                            </div>
                            <button className="button2" onClick={HandelFlip}>Switch</button>  
                        </form>
                    </div>
                    <div className="flip-card-back">
                        <form className="form">
                            <CloseButton aria-label="close" className="close" onClick={onClose} variant='white' />
                            <p id="heading">Login</p>
                            <div className="field">
                                {Svg[0]}
                                <input autoComplete="off" placeholder="Username" className="input-field" type="text" name="FullName"  value={newUser.FullName} onChange={HandelChange}/>
                            </div>
                            <div className="field">
                                {Svg[1]}
                                <input autoComplete="off" placeholder="Email" className="input-field" type="text" name="Email" value={newUser.Email} onChange={HandelChange}/>
                            </div>
                            <div className="field">
                                {Svg[2]}
                                <input placeholder="Password" className="input-field" type="password" name="Password" value={newUser.Password} onChange={HandelChange}/>
                            </div>
                            {status.type === 'error' && <p style={{color:'red'}}>{status.message}</p>}
                            {status.type === 'success' && <p style={{color:'green'}}>{status.message}</p>}
                            <div className="btn">
                                <button className="button1" onClick={HandelSignup}>Sign Up</button>
                            </div>
                            <button className="button2" onClick={HandelFlip}>Switch</button> 
                        </form>
                    </div>
                </div>
        </div>
    </div>    
  );
}
