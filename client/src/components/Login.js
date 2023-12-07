import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Login() {
    const history = useNavigate();

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    async function submit(e){
        e.preventDefault(); //to make sure we don't get any small letters
        try{
            await axios.post("http://localhost:8000/",{username,password})
            .then(res=>{
                if(res.data== "exist"){
                    history("/home",{state:{id:username}})

                }else if(res.data== "not exist"){
                    alert("User is not found")
                }
            })
            .catch(e=>{
                alert("Wrong credentials")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>

            <form action="POST">
                <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="Username" name="" id="" />
                <input type="text" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" name="" id="" />
                <input type="submit" onClick = {submit}/>


            </form>

            <br />
            <p>OR</p>
            <br />
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}

export default Login;