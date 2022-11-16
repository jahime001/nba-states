import React, { useState } from 'react'
import './Roster.css';
import axios from 'axios';

export default function Roster({ chosenTeam }) {
    const [players, setPlayers] = useState([])
    console.log(chosenTeam)

    // const options = {
    //     method: 'GET',
    //     url: 'https://api-nba-v1.p.rapidapi.com/players',
    //     params: { team: `${chosenTeam.id}`, season: '2022' },
    //     headers: {
    //         'X-RapidAPI-Key': 'add2b9373amsh7fd545895389f94p1b3613jsnb59a449e90b1',
    //         'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    //     }
    // };

    // axios.request(options).then(function (response) {
    //     setPlayers(response.data.response);
    //     console.log(players);
    // }).catch(function (error) {
    //     console.error(error);
    // });

    return (
        <div>
            <h1 className='roster'>{chosenTeam.name}</h1>
            <h1 className='roster'>{chosenTeam.id}</h1>
            {/* <h1>router</h1> */}
        </div>
    )
}
