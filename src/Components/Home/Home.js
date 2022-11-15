import React from "react";
import { Link } from "react-router-dom";
import videobg from "../../assets/nbamix.mp4";
import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <div className="video">
                <div className="overlay"></div>
                <video src={videobg} autoPlay loop />
                <Link to='teams' className="team-check"><h1>Check Out Teams</h1></Link>


            </div>
        </div>
    )
}