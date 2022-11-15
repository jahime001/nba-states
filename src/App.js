
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Nav from './Components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Teams from './Components/Teams/Teams';
import Games from './Components/Games/Games';
import TeamInfo from './Components/TeamInfo/TeamInfo';
function App() {
  const [teamsInfo, setTeamsInfo] = useState([])
  const [nbaTeams, setNbaTeams] = useState([])

  const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/teams',
    headers: {
      'X-RapidAPI-Key': 'add2b9373amsh7fd545895389f94p1b3613jsnb59a449e90b1',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };


  // function deleteNonNba(){
  //   if(!results.data.response.nbaFranchise){

  //   }
  // }

  async function getTeams() {
    let results = await axios.request(options);
    setTeamsInfo(results.data.response)
    let nbaFranchises = []
    // nbaFranchises = 
    teamsInfo.map(franchise => {
      if (franchise.nbaFranchise) {
        nbaFranchises.push(franchise)

      }
    })
    setNbaTeams(nbaFranchises)
  }
  useEffect(() => {
    getTeams();
  }, [])



  // function deleteNonNba() {
  //   teamsInfo.map((team) => {
  //     Object.keys(team).forEach(key => {
  //       if (!team[key]) {
  //         teamsInfo.pop(team);
  //       }
  //     });
  //   })

  //     console.log(teamsInfo)
  //   }


  // const options = {
  //   method: 'GET',
  //   url: 'https://api-nba-v1.p.rapidapi.com/players/statistics',
  //   params: { team: '1', season: '2020' },
  //   headers: {
  //     'X-RapidAPI-Key': 'add2b9373amsh7fd545895389f94p1b3613jsnb59a449e90b1',
  //     'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data.response);
  // }).catch(function (error) {
  //   console.error(error);
  // });



  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='teams' element={<Teams nbaTeams={nbaTeams} />} />
          <Route path='games' element={<Games />} />
          <Route path='teaminfo' element={<TeamInfo />} />
        </Routes>
      </main>
      <button onClick={getTeams}>getTeams</button>


    </>

  );
}

export default App;
