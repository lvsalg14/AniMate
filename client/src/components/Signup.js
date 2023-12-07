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
            await axios.post("http://localhost:8000/signup",{username,password})
            .then(res=>{
                if(res.data== "exist"){
                    alert("User already exists")
                    //history("/home",{state:{id:username}})

                }else if(res.data== "not exist"){
                    history("/home",{state:{id:username}})                }
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
            <h1>Signup</h1>

            <form action="POST">
                <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="Username" name="" id="" />
                <input type="text" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" name="" id="" />
                <input type="submit" onClick = {submit}/>


            </form>

            <br />
            <p>OR</p>
            <br />
            <Link to="/">Log in</Link>
        </div>
    )
}
export default Login;