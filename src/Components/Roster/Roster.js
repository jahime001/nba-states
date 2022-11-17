import React, { useEffect, useState } from 'react'
import './Roster.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Roster({ chosenTeam }) {
    const [players, setPlayers] = useState([])
    console.log(chosenTeam)
    const navigate = useNavigate()

    const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/players',
        params: { team: `${chosenTeam.id}`, season: '2022' },
        headers: {
            'X-RapidAPI-Key': 'add2b9373amsh7fd545895389f94p1b3613jsnb59a449e90b1',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };


    async function getPlayers() {
        let results = await axios.request(options)
        console.log(results.data.response)
        setPlayers(results.data.response)

    }

    useEffect(() => {
        getPlayers()
    }, [])



    return (
        <div className='players-container'>

            <div className="player-container">
                <div className='player-card'>
                    <h2 className='player-name'>Name</h2>
                    <h2 className="player-position">Position</h2>
                    <h2 className="player-jersey">#</h2>
                    <h2 className="player-height">Height</h2>
                    <h2 className="player-weight">Weight -Lbs</h2>
                    <h2 className="player-start">Draft Year</h2>
                </div>


                {players.map((player) => {
                    console.log(player.firstname)
                    return (
                        <div className="player-card" key={player['id']}>
                            <h2 className='player-name'>{player.firstname}, {player.lastname}</h2>
                            <h2 className="player-position">{player.leagues.standard.pos}</h2>
                            <h2 className="player-jersey">{player.leagues.standard.jersey}</h2>
                            <h2 className="player-height">{player.height.feets}'{player.height.inches}</h2>
                            <h2 className="player-weight">{player.weight.pounds}</h2>
                            <h2 className="player-start">{player.nba.start}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
