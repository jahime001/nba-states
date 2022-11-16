import React from "react";
import './Teams.css';
import { Link, Routes, Route, useParams } from "react-router-dom";
import TeamsInfo from "../TeamsInfo/TeamsInfo";


function Teams(props) {
    const nbaTeams = props.nbaTeams;

    return (
        <div className="teams-container">

            {nbaTeams.map((team) => {
                return (
                    <Link to={"/teams/" + team['code']}>
                        <div className="card" key={team['code']}>
                            <img className="card-logo" src={team['logo']} alt="" />
                            <h2 className="card-name">{team['name']}</h2>
                        </div>
                    </Link>
                )
            })}
        </div>

    )
}

export default Teams