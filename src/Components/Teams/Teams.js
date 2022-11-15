import React from "react";
import './Teams.css';
import { Link } from "react-router-dom";

function Teams(props) {
    const nbaTeams = props.nbaTeams;

    return (
        <div className="teams-container">

            {nbaTeams.map((team) => {
                return (<div className="card" key={team['id']}>
                    <img className="card-logo" src={team['logo']} alt="" />
                    <h2 className="card-name">{team['name']}</h2>
                </div>
                )
            })}

        </div>

    )
}

export default Teams