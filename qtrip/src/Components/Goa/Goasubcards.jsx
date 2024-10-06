import React, { useEffect, useState } from 'react';
import "../../Style/bstyle.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Goasubcards = ({ apiid }) => {
    const [api, setApi] = useState([]);
    useEffect(() => { fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures/detail?adventure=${apiid}`)
                        .then(x=>x.json()).then(x=>setApi([x]))});

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
                    <img className="carouselImg"  src={x.images[1]} alt=""/>
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
 let Perthby = () => <Goasubcards apiid="8549673097" />;
 let Nesbridge = () => <Goasubcards apiid="0610512104" />;
 let Kennticend= () => <Goasubcards apiid="7536826557" />;
 let Pressalcreek = () => <Goasubcards apiid="0733501601" />;
 let Heathber = () => <Goasubcards apiid="0606744025" />;
 let Stplympside = () => <Goasubcards apiid="2621544733" />;
 let Lowtra = () => <Goasubcards apiid="0534597016" />;
 let Chettbouaux = () => <Goasubcards apiid="7247489857"/>;
 let Bucktim= () => <Goasubcards apiid="6710850298"/>;
 let Ntibranlake= () => <Goasubcards apiid="9312138770"/>;
 let Warflin= () => <Goasubcards apiid="5915383379"/>;
 export {Perthby,Nesbridge, Kennticend,Pressalcreek,Heathber,Stplympside,Lowtra,Chettbouaux,Bucktim,Ntibranlake,Warflin}