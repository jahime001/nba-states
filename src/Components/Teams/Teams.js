import React from "react";
import './Teams.css';
import { Link, Routes, Route, useParams } from "react-router-dom";
import TeamsInfo from "../TeamsInfo/TeamsInfo";


function Teams({ nbaTeams }) {



    return (
        <div className="teams-container">

            {nbaTeams.map((team) => {
                return (
                    <Link to={"/teams/" + team['code']}>
                        <div className="card" key={team['code']}>
                            <img className="card-logo" src={team['logo']} alt="" />
                        </div>
                    </Link>
                )
            })}
        </div>

    )
}

export default Teams