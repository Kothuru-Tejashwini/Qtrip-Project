// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../Style/index.css";
export default function Register() {
    function collectingdata(){
    let email = document.getElementById("Ruseremail").value;
    let key = document.getElementById("Rpassword").value;
    let Dkey = document.getElementById("RDpassword").value;
             if(key===Dkey){
             window.sessionStorage.setItem("UserEmail",email);
             window.sessionStorage.setItem("Password",key);
             }
             else{
                 alert("Check the Password")
             }
    }
    return (
        <div id="Register">
        <div id="Homediv">
            <h1>Welcome to QTrip</h1>
            <p>Explore the world with fantastic places to venture around</p>
            <form id="RegisterDiv">
            <label id="LoginDivh1">Register</label> <br />
            <input id="Ruseremail" type="email"placeholder="Email address" /><br />
            <input id="Rpassword"  type="password"placeholder="Type to create account password" /><br />
            <label id="RegisterDivp">Password must include at least one special character and a numeric character</label><br />
            <input id="RDpassword"  type="password"placeholder="Retype to Confirm" /><br />
            <input type="submit" value="Register Now"  onClick={collectingdata} /><br />
            <label id="LoginDivp">Already have an account?<a href="/login">Login Now</a></label> <br />
            </form>
        </div>
        </div>
    );
}
