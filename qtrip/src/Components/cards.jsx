import React from 'react';
import {Link} from "react-router-dom";

// import Bapp from './Bengaluru/BengaluruMain';
import "../Style/index.css";

// export default class Cards extends React.Component{
//     render(){

      

//         return(<>

//             <div id="cardsdiv">
            
//             <div className="tile" >
//             <Link to="/bengaluru">
//                 <img  src="https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"/> 
//             </Link>
//                   <div className="tdata">
//                   <h5 className="tdh5">BENGALURU</h5>
//                   <p className="tdp">100+ PLACES</p>
//                   </div>
//                 </div>
               
            
//               <div className="tile">
//                 <Link to='/Goa'>
//                     <img  src="https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"/>
//                 </Link>
//                 <div className="tdata">
//                   <h5 className="tdh5">GOA</h5>
//                   <p className="tdp">250+ PLACES</p>
//                   </div>
//                 </div>
                
//               <div className="tile">
              
//                 <img  src="https://images.pexels.com/photos/2524368/pexels-photo-2524368.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"/>
//                 <div className="tdata">
//                   <h5 className="tdh5">KOLKATA</h5>
//                   <p className="tdp">100+ PLACES</p>
//                   </div>
//                 </div>
        
//               <div className="tile">
              
//                 <img  src="https://i.ibb.co/WVL7n8K/singapore.jpg"/>
//                 <div className="tdata">
//                   <h5 className="tdh5">SINGAPORE</h5>
//                   <p className="tdp">100+ PLACES</p>
//                   </div>
//                 </div>
            
            
//               <div className="tile">
              
//                 <img  src="https://images.pexels.com/photos/2940925/pexels-photo-2940925.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"/>
//                 <div className="tdata">
//                   <h5 className="tdh5">MALAYSIA</h5>
//                   <p className="tdp">100+ PLACES</p>
//                   </div>
//                   </div>
            
            
//               <div className="tile">
              
//                 <img className="img-responsive" src="https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?cs=srgb&amp;dl=pexels-ingo-joseph-1682748.jpg&amp;fm=jpg"/>
//                 <div className="tdata">
//                   <h5 className="tdh5">BANGKOK</h5>
//                   <p className="tdp">250+ PLACES</p>
//                   </div>
//                 </div>

//               <div className="tile">  
//                 <img  src="https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"/>
//                 <div className="tdata">
//                   <h5 className="tdh5">NEW YORK</h5>
//                   <p className="tdp">100+ PLACES</p>
//                   </div>
//               </div>
            
//               <div className="tile">
//                 <img  src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"/>
//                 <div className="tdata">
//                   <h5 className="tdh5">PARIS</h5>
//                   <p className="tdp">100+ PLACES</p>
//                   </div>
//                 </div>
             
//             </div>
//         </>
          
//         ) }
// }

// CARDS WITH PROPS

// import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function Cards(){
  
  
let[api,setapi]=useState([])

//  let navigate=useNavigate()



  useEffect(()=>{ fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
    .then(x=>x.json())
    .then(y=>setapi(y))
 
  })


    // console.log("appi ---->>",this.state.api)
    return(
          <>
          <>
          <div id="cardsdiv">
          {
          
            api.map((y,k1)=>{return(
            <Link key={k1} to={"/"+y.id}>
            <div className="tile" style={{margin:"10px"}}>
              <img  src={y.image} alt=""/>
              <div className="tdata">
              <h5 className="tdh5">{y.id.toUpperCase()}</h5>
              <p className="tdp">{y.description}</p>
              </div>
            </div>
            </Link>
            )})
          }
           </div>
          </>
          </>
    )

    // let bengaluru=navigate("/bengaluru")
    // let goa=navigate("/goa")
    // let kolkata=navigate("/kolkata")
    // let singapore=navigate("/singapore")
    // let malaysia=navigate("/malaysia")
    // let bangkok=navigate("/bangkok")
    // let newyork=navigate("/new-york")
    // let paris=navigate("/paris" )
   

  }
