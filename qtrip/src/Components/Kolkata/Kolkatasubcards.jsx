import React, { useEffect, useState } from 'react';
import "../../Style/bstyle.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Kolkatasubcards = ({ apiid }) => {
    const [api, setApi] = useState([]);
    useEffect(() => { fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures/detail?adventure=${apiid}`)
                        .then(x=>x.json()).then(x=>setApi([x]))})
                        .catch(x=>console.log("failed to Fetch"))
                        // console.log(apiid)
                        // console.log(api)
    return ( <>
            {api.map((x, k1) => (
                <div key={k1}  id="NiaboytownDiv">
                    <h1>{x.name}</h1>
                    <h2>{x.subtitle}</h2>
                    <div id="CarouselimgDiv">
                    <Carousel >
                    <img className="carouselImg" src={x.images[0]} alt=""/>
                    <img className="carouselImg"  src={x.images[1]} alt="" />
                    <img className="carouselImg"  src={x.images[2]} alt=""/>
                    </Carousel>
                    </div>
                    <div><hr></hr></div>
                    <h3 id="Carouselh3">About the Experience</h3>
                    <p id="CrouselPara">{x.content}</p>
                </div>
            ))}
        </>);
};
 let Thton = () => <Kolkatasubcards apiid="8318638903" />;
 let Grandrubou = () => <Kolkatasubcards apiid="3936107807" />;
 let Nesbridge = () => <Kolkatasubcards apiid="8632343612" />;
 let Northgelgoon = () => <Kolkatasubcards apiid="2629332143" />;
 let Lalakechi = () => <Kolkatasubcards apiid="2212680653" />;
 let Annviriningsauk = () => <Kolkatasubcards apiid="1157691488" />;
export {Thton,Grandrubou,Nesbridge,Northgelgoon,Lalakechi,Annviriningsauk}