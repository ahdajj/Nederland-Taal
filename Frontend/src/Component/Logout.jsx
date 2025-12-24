import {Button} from 'react-bootstrap';
import { useAuth } from '../Authentication/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

function Logout (){
    const {user , logout}=useAuth()
    const navigate=useNavigate()

    const HandleLogout=()=>{
        logout()
        navigate('/')
    }
    return(
        <div className='d-flex flex-row align-items-center'>
            <p className='d-flex flex-column align-items-center m-0 p-0 ms-3 ' style={{color:'white'}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-user border border-1 rounded-circle "><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg> مرحباً {user}</p>
            <Button variant="outline-light" onClick={HandleLogout}>
                    تسجيل الخروج 
            </Button>   
        </div>
    )
}
export default Logout