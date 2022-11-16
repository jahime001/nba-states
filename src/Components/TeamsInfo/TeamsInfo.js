import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './TeamsInfo.css';
import { Link, useNavigate } from "react-router-dom";


function TeamsInfo(props) {
    let { code } = useParams()
    let nbaTeams = props.nbaTeams
    const [chosenTeam, setChosenTeam] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    let matchingTeam = []

    nbaTeams.map(teamcode => {
        console.log(teamcode.code)
        if (teamcode.code === code) {
            matchingTeam.push(teamcode)


        }
    })

    useEffect(() => {

    }, [loading])

    if (matchingTeam.length > 0) {
        console.log('1')

        console.log(matchingTeam);
        return (
            <div className="teams-info-container">
                <h1 onClick={() => navigate(-1)} className="back-button">Back</h1>
                <div className="teams-info-card">
                    <div className="teams-info-card-upper">
                        <img className="teams-info-logo" src={matchingTeam[0].logo} alt="" />
                        <h1 className="teams-info-name">{matchingTeam[0].name}</h1>
                        <h1 className="team-code">{code}</h1>
                    </div>
                    <div className="teams-info-card-mid">
                        <h1 className="team-info-title">Team Info</h1>
                        <div className="teams-info-info">
                            <div className="info-left">
                                <h3 className="conferance">Conferance:</h3>
                                <h1>{matchingTeam[0].leagues.standard['conference']}</h1>
                            </div>
                            <div className="info-right">
                                <h3 className="division">Division:</h3>
                                <h1>{matchingTeam[0].leagues.standard['division']}</h1>
                            </div>
                        </div>

                    </div>
                    <div className="teams-info-card-lower">
                        <h1>View Roster</h1>
                    </div>
                </div>
            </div>
        )

    } else {
        console.log('2')
        setLoading(true)
        return <div className="teams-info-container"><h1>Loading</h1></div>
    }


    // return (

    //     <div className="teams-info-container">
    //         {/* {show} */}
    //     </div>
    // )
}


export default TeamsInfo