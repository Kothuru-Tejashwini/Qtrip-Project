import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/index.css";

function Nav() {
    const navigate = useNavigate();
    const [search, updatedSearch] = useState("");

    const change = (e) => {
        updatedSearch(e.target.value);
    };

    useEffect(() => {
        if (search) {
            const lowerCaseSearch = search.toLowerCase();
            if (lowerCaseSearch.includes("bengaluru")) {
                navigate("/bengaluru");
            } else if (lowerCaseSearch.includes("goa")) {
                navigate("/goa");
            }
            else if (lowerCaseSearch.includes("kolkata")) {
                navigate("/kolkata");
            }
            else if (lowerCaseSearch.includes("singapore")) {
                navigate("/singapore");
            }
            else if (lowerCaseSearch.includes("malaysia")) {
                navigate("/malaysia" );
            }
            else if (lowerCaseSearch.includes("bangkok")) {
                navigate("/bangkok");
            }
            else if (lowerCaseSearch.includes("newyork")) {
                navigate("/new-york" );
            }
            else if (lowerCaseSearch.includes("paris")) {
                navigate("/paris" );
            }
           


    // useEffect(() => {
    //     if (search) {
    //         const lowerCaseSearch = search.toLowerCase();
    //         if (lowerCaseSearch.includes("b","e","n","g","a","l","u","r","u")) {
    //             navigate("/bengaluru");
    //         } else if (lowerCaseSearch.includes("g","o","a")) {
    //             navigate("/goa");
    //         }
    //         else if (lowerCaseSearch.includes("k","o","l","k","a","t","a")) {
    //             navigate("/kolkata");
    //         }
    //         else if (lowerCaseSearch.includes("s","i","n","g","a","p","o","r","e")) {
    //             navigate("/singapore");
    //         }
    //         else if (lowerCaseSearch.includes("m","a","l","a","y","s","i","a")) {
    //             navigate("/malaysia" );
    //         }
    //         else if (lowerCaseSearch.includes("b","a","n","g","k","o","k")) {
    //             navigate("/bangkok");
    //         }
    //         else if (lowerCaseSearch.includes("n","e","w","y","o","r","k")) {
    //             navigate("/new-york" );
    //         }
    //         else if (lowerCaseSearch.includes("p","a","r","i","s")) {
    //             navigate("/paris" );
    //         }
             
    // }});

 
        
    }});

    return (
        <div id="Homediv">
            <h1>Welcome to QTrip</h1>
            <p>Explore the world with fantastic places to venture around</p>
            <input
                onChange={change}
                type="search"
                id="search"
                placeholder="Search a City"
                value={search}
            />
        </div>
    );
}

export default Nav;
