"use client"
 
import { useRouter } from "next/navigation"
import { useState } from "react"
 
const users = [{ username: "admin", password: "admin"}]
 
const LoginPage = () => {
 
    const router = useRouter()
    const [username, setUsername] = useState(null)
    const [pass, setPass] = useState(null)
 
    const entrar = () => {
        
        const userExist = users.some(user => {
            return user.password == pass && user.username == username
        })
        
        if(userExist)
           return router.push("/dashboard")
 
        alert("usuario nao existe")   
 
    }
 
    return <>
        {username}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "50%" }}>
            <label>Informe seu e-mail</label>
            <input type="text" onChange={(event)=>{
                setUsername(event.target.value)
            }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "50%" }}>
            <label>Informe sua senha</label>
            <input type="password"  onChange={(event)=>{
                setPass(event.target.value)
            }}  />
        </div>
        <button onClick={entrar} style={{ padding: 5, background: "#7126e3", color: "#fff", borderRadius: 10, marginTop: 5 }}>Entrar</button>
    </>
}
 
export default LoginPage;