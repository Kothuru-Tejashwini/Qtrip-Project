import React from "react";

import "../Style/index.css";


export default function Login() {
  

    function verification(){
        let email=document.getElementById("Luseremail").value;
        let pswd=document.getElementById("Lpassword").value;

        if(email===window.sessionStorage.getItem("UserEmail")&&(pswd===window.sessionStorage.getItem("Password"))){
            window.open("/")
        }
        else{
            alert("Enter Valid Credentials")
        }

    }


    return (
        <div id="Login">
        <div id="Homediv">
            <h1>Welcome to QTrip</h1>
            <p>Explore the world with fantastic places to venture around</p>
           
            <form id="LoginDiv">

            <label id="LoginDivh1">Login</label> <br />

            <input  id="Luseremail" type="email"placeholder="Email address" /><br />
            <input  id="Lpassword" type="password"placeholder="Password" /><br />
            <input type="submit" href="/" value="Login to QTrip" onClick={verification} /><br />
            <label id="LoginDivp">Don’t have an account?<a href="/Register"> Register Now</a></label> <br />

            </form>
        </div>
        </div>
    );
}
