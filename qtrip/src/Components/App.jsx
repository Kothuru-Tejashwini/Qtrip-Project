import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";

// import Cards from './Cards';
import Navbar from "./navbar";
import QtripHome from './Qtriphome';
import Login from './Login';
import Register from './Registeration';

import Bengaluru from "./Bengaluru/BengaluruMain";
import Niaboytown from "./Bengaluru/Niaboytown";
import Fortsionnnn from './Bengaluru/Fortsionnnn';
import Wooddaux from './Bengaluru/Wooddaux';
import Harbour from './Bengaluru/Harbour';
import Stonelumhawk from './Bengaluru/Stonelumhawk';
import Laanrncast from './Bengaluru/Laanrncast';
import Fortshilbluff from './Bengaluru/Fortshilbluff';
import Eastvyfolk from './Bengaluru/Eastvyfolk';
import Shiwood from './Bengaluru/Shiwood';

import Kolkata from './Kolkata/KolkataMain';
import {Thton,Grandrubou,Nesbridge,Northgelgoon,Lalakechi,Annviriningsauk} from "./Kolkata/Kolkatasubcards"

import Goa from "./Goa/GoaMain";
import {Perthby,Kennticend,Pressalcreek,Heathber,Stplympside,Lowtra,Chettbouaux,Bucktim,Ntibranlake,Warflin} from "./Goa/Goasubcards"

import Malaysia from './Malaysia/MalaysiaMain';
import Singapore from './singapore/SingaporeMain';
import Bangkok from './Bangkok/BangkokMain';
import Paris from './Paris/ParisMain';
import Newyork from './NewYork/NewyorkMain';


export default class App extends React.Component{
    render(){
        return(
            
    <BrowserRouter>

     <Navbar/>

        <Routes>
            <Route path="/" element={<QtripHome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>

        </Routes>

        <Routes>

            {/* BENGALURU */}

            <Route path="/bengaluru" element={<Bengaluru/>}/>
            <Route path="/Niaboytown" element={<Niaboytown/>}/>
            <Route path="/Fort Sionnnn" element={<Fortsionnnn/>}/>
            <Route path="/Wooddaux" element={<Wooddaux/>}/>
            <Route path="/Bageorge With Nonshi Harbour" element={<Harbour/>}/>
            <Route path="/Stonelumhawk" element={<Stonelumhawk/>}/>
            <Route path="/La Anrncast" element={<Laanrncast/>}/>
            <Route path="/Fort shilbluff" element={<Fortshilbluff/>}/>
            <Route path="/Shiwood" element={<Shiwood/>}/>
            <Route path="/East Vyfolk" element={<Eastvyfolk/>}/>
        
        </Routes>

        <Routes>

            {/* GOA */}

            <Route path="/goa" element={<Goa/>}/>
            <Route path="/Perthby" element={<Perthby/>}/>
            <Route path="/Nesbridge" element={<Nesbridge/>}/>
            <Route path="/Kenntic End" element={<Kennticend/>}/>
            <Route path="/Pressal Creek" element={<Pressalcreek/>}/>
            <Route path="/Heathber" element={<Heathber/>}/>
            <Route path="/St Plympside" element={<Stplympside/>}/>
            <Route path="/Lowtra" element={<Lowtra/>}/>
            <Route path="/Chettbou Aux Dersting" element={<Chettbouaux/>}/>
            <Route path="/Bucktim" element={<Bucktim/>}/>
            <Route path="/Ntibran Lake" element={<Ntibranlake/>}/>
            <Route path="/Warflin" element={<Warflin/>}/>

        </Routes>

        <Routes>

            {/* KOLKATA */}

            <Route path="/kolkata" element={<Kolkata/>}/>
            <Route path="/Thton" element={<Thton/>}/>
            <Route path="//Grand Rubou Du Wagten" element={<Grandrubou/>}/>
            {/*      <Route path="/Nesbridge" element={<Nesbridge/>}/>           */}
            <Route path="/North Gelgoon" element={<Northgelgoon/>}/>
            <Route path="/La Lakechi With Lipentage" element={<Lalakechi/>}/>
            <Route path="/Annvir-In-Ingsauk Lake" element={<Annviriningsauk/>}/>

        </Routes>

        <Routes>
            <Route path="/malaysia" element={<Malaysia/>}/>
            <Route path="/singapore" element={<Singapore/>}/>
            <Route path="/bangkok" element={<Bangkok/>}/>
            <Route path="/paris" element={<Paris/>}/>
            <Route path="/new-york" element={<Newyork/>}/>


        </Routes>


    </BrowserRouter>     
            
        )
    }
}