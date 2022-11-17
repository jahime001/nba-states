import React from "react";
import './About.css'

function About() {
    return (
        <div className="about-container">
            <div className="about-info">
                <h1>About</h1>
                <h2>The goal of this project was to build a full Front-End application using React.js using what i learned as a GA student. Technologies i used consist of: HTML, CSS, Javascript, Axios, and React. Using this app you can a NBA team's Roster and Upcoming Games</h2>
                <h1>Future Changes</h1>
                <ul>
                    <li>More information for each team <span>&#40;</span><em>e.g. wins/losses, record for current season, all time stats</em><span>&#41;</span>.</li>
                    <li>Search feature to be able to search by player or team</li>
                    <li>A more detailed roster page with players puctures and stats</li>
                    <li>Sign in feature so you can favorite teams</li>
                </ul>
                <h1>Links</h1>
                <div className="about-links">
                    <a href="https://rapidapi.com/api-sports/api/api-nba/" target='blank'>Api-NBA by RapidAPI</a>
                    <a href="https://www.linkedin.com/in/jahimecameau/" target='blank'>Linkedin</a>
                    <a href="https://github.com/jahime001/nba-stats" target='blank'>GitHub Repo</a>
                </div>
            </div>
        </div>
    )
}

export default About