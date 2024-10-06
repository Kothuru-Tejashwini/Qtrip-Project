import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


import Homepage from "./homepage.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

export default class Qtriphome extends React.Component{

    render(){
        return(<>
               
                <Homepage/>
                <Cards />
                <Footer />
  
        </>
        )
    }
}
