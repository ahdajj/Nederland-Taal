import { createContext , useContext , useState,useEffect } from "react";
import axios from "axios";

const AuthContext = createContext()
export const AuthProvider =({children})=>{
    const [user , setUser]=useState(null)

    useEffect (()=>{
        axios.get('http://localhost:3500/api/me', {withCredentials:true})
        .then((res)=>setUser(res.data))
        .catch((err)=>setUser(null))
    },[])
    const login=async(userData)=>{
        const res =await axios.post('http://localhost:3500/api/login' ,userData, {withCredentials:true})
        setUser(res.data)
        return res.data
    }
    const logout = async()=>{
        await axios.post('http://localhost:3500/api/logout' , {} ,{withCredentials:true})
        setUser(null)
    }
    return(
        <AuthContext.Provider value={{user , login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>useContext(AuthContext)