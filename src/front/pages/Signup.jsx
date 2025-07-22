import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const Signup = () =>{

    const { store, dispatch } = useGlobalReducer()
    

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState ("")
    const navigate = useNavigate()
    
    function sendData(e){
        e.preventDefault()
        navigate("/demo")
        
        const requestOptions = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(
                {
                    "email": email,
                    "password": password
                }
            ),
            
        }
        
        fetch( import.meta.env.VITE_BACKEND_URL + "/api/signup", requestOptions)
        .then((response) => {
            if (response.status == 200){
                dispatch({ 
                    type: "set_auth", 
                    payload: true })
                }
                
                return response.json()
            })
            .then((data) => {
                localStorage.setItem("token", data.access_token);
                console.log(data)
            }
        )
    }
                
    return (

        <div>
             <form className="w-75 m-auto" onSubmit={sendData}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input value= {email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input value= {password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="d-flex justify-content-between">
                    <button  type="submit" className="btn btn-success">Create User</button>
                    <Link to="/">
                    <button type="submit" className="btn btn-danger">Back to Home</button>
                    </Link>
                </div>
             </form>
        </div>
    )        
}
