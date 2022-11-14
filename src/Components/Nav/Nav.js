import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

export default function Nav() {
    return (
        <div className="Nav">
            <div className="logo">
                <Link to='/' className="nav-link">
                    <img src="https://pngimg.com/uploads/nba/nba_PNG15.png" alt="" />
                    <h1>NBA States</h1>
                </Link>
            </div>

            <nav>
                <Link to='/' className="nav-link"><h3>Home</h3></Link>
                <Link to='teams' className="nav-link"><h3>Teams</h3></Link>
                <Link to='games' className="nav-link"><h3>Upcoming Games</h3></Link>
                <Link to='about' className="nav-link"><h3>About</h3></Link>
            </nav>
        </div>
    )
}