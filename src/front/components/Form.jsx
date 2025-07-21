import React, { useState } from "react";

const Form = () =>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState ("")
    
    function sendData(e){
        e.preventDefoult()
    }
    
    const requestOptions = {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(
        {
            "email": email,
            "password": password
        }
    )
}

    fetch("https://bookish-trout-4jv4w6vp964xhq454-3001.app.github.dev/api/login", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))

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
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
             </form>
        </div>
    )        
}

 export default Form