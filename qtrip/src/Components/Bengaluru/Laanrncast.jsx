import React from 'react';
// import Footer from '../footer';
import "../../Style/bstyle.css"
import { useEffect,useState } from 'react';
// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Laanrncast(){
    let[api,setapi]=useState([])
    useEffect(()=>{ fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=7938812489")
        .then(x=>x.json())
        .then(y=>setapi([y])) 
                },[])
// console.log(api)
return(<>
{api.map((x,k1)=>{
        return(
                <div key={k1} id="NiaboytownDiv"> 
                    <h1>{x.name}</h1>
                         <h2 >{x.subtitle}</h2>
                         <div  id="CarouselimgDiv">
                             <Carousel>

                             <div><img className="carouselImg" src={x.images[0]} alt=""/></div>
                             <div><img className="carouselImg"  src={x.images[1]} alt=""/></div>
                             <div><img className="carouselImg"  src={x.images[2]} alt=""/></div>

                             </Carousel>
                       </div>
                       <div><hr></hr></div>
                         <h3 id="Carouselh3">About the Experience</h3>
                         <p id="CarouselPara">{x.content}</p>
                        </div>
                    )})}
             
</>)

}


    





