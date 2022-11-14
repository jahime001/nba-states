
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Nav from './Components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Teams from './Components/Teams/Teams';
import Games from './Components/Games/Games';
function App() {
  const [teamsInfo, setTeamsInfo] = useState([])


  const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/teams',
    headers: {
      'X-RapidAPI-Key': 'add2b9373amsh7fd545895389f94p1b3613jsnb59a449e90b1',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response.data.response);
  }).catch(function (error) {
    console.error(error);
  });



  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='teams' element={<Teams />} />
          <Route path='games' element={<Games />} />
        </Routes>
      </main>
    </>

  );
}

export default App;
