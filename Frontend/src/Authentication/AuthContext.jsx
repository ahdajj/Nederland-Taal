import { createContext , useContext , useState,useEffect } from "react";
import axios from "axios";

const AuthContext = createContext()
export const AuthProvider =({children})=>{
    const [user , setUser]=useState(null)

    useEffect (()=>{
        axios.get('http://localhost:3500/api/me', {withCredentials:true})
        .then((res)=>{
            setUser(res.data)})
        .catch((err)=>setUser(null))
    },[])

    const signup=async(userData)=>{
        try {
            const res = await axios.post('http://localhost:3500/api/Signup', userData , {withCredentials:true} )
            // setUser(res.data)        // we can use it for auto-login after signup
            return res.data
        } catch (err){
            throw err.response.data
        } 
    }

    const login=async(userData)=>{
        try{
            const res =await axios.post('http://localhost:3500/api/Login' ,userData, {withCredentials:true})
            setUser(res.data)
            return res.data
        } catch (err){
            throw err.response.data
        }
    }

    const logout = async()=>{
        try {
            await axios.post('http://localhost:3500/api/Logout' , {} ,{withCredentials:true})
            setUser(null)
        } catch (err){
            throw err
        }

    }
    return(
        <AuthContext.Provider value={{user , login , logout , signup}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth=()=>useContext(AuthContext)