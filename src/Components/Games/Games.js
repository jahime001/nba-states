import { useEffect, useState } from "react";
import axios from "axios";
import './Games.css'
import { Link } from "react-router-dom";
function Games() {
    const [gamesToday, setGamesToday] = useState([])
    const [todaysDate, setTodaysDate] = useState('2022-11-18')



    const options = {
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/games',
        params: { date: `${todaysDate}` },
        headers: {
            'X-RapidAPI-Key': 'add2b9373amsh7fd545895389f94p1b3613jsnb59a449e90b1',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };

    async function getGames() {
        let results = await axios.request(options)
        setGamesToday(results.data.response)

    }


    useEffect(() => {
        getGames()

    }, [todaysDate])

    function handleChange(e) {
        setTodaysDate(e.target.value)
    }






    return (
        <div>
            <div className="games-container">
                <h1>View Games</h1>
                <input
                    type="date"
                    value={todaysDate}
                    onChange={handleChange}
                    className='input'
                />
                {gamesToday.map(game => {
                    let time = game.date.start
                    let givinTime = time.substring(12, 16)
                    let timeSplit = givinTime.split('')
                    let i = parseInt(timeSplit[0]);
                    i = i + 7
                    timeSplit[0] = i.toString()
                    let newTime = timeSplit.join('')

                    if (game.status.long === "Scheduled") {
                        return (
                            <div className='game-card'>
                                <div className="vis-team">
                                    <Link to={"/teams/" + game.teams.visitors.code} className="game-link">
                                        <img className="gi" src={game.teams.visitors.logo} alt="" />
                                        <h1>{game.teams.visitors.name}</h1>
                                        <h2 className="tbd">TBD</h2>
                                    </Link>
                                </div>

                                <div className="game-data">
                                    <h3 className="vs">@</h3>
                                    <h3 className="vs">{todaysDate}</h3>
                                    <h3>@{newTime}</h3>
                                </div>
                                <div className="home-team">
                                    <Link to={"/teams/" + game.teams.home.code} className="game-link">
                                        <img className="gi" src={game.teams.home.logo} alt="" />
                                        <h1>{game.teams.home.name}</h1>
                                        <h2 className="tbd">TBD</h2>
                                    </Link>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className='game-card'>
                                <div className="vis-team">
                                    <Link to={"/teams/" + game.teams.visitors.code} className="game-link">
                                        <img className="gi" src={game.teams.visitors.logo} alt="" />
                                        <h1>{game.teams.visitors.name}</h1>
                                        <h2>{game.scores.visitors.points}</h2>
                                    </Link>
                                </div>
                                <div className="game-data">
                                    <h3 className="vs">@</h3>
                                    <h3 className="vs">{todaysDate}</h3>
                                    <h3 className="vs">Final</h3>
                                </div>
                                <div className="home-team">
                                    <Link to={"/teams/" + game.teams.home.code} className="game-link">
                                        <img className="gi" src={game.teams.home.logo} alt="" />
                                        <h1>{game.teams.home.name}</h1>
                                        <h2>{game.scores.home.points}</h2>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div >
    )
}

export default Games