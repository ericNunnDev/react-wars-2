import React, { useState, useEffect } from 'react';
import CharCard from './components/CharCard';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const App = () => {
  const [chars, setChars] = useState([]);

useEffect(() => {
  axios
    .get(`https://swapi.co/api/people/`, {
      params: {}
    })
    .then(res => {
      const charInfo = res.data;
      console.log(charInfo);
      setChars(chars);
    })
    .catch(e => {
      console.log(e)
    })
}, []);

  return (
    <div className="App">
      <Title>React Wars</Title>
      {chars.map(char => {
        return (
          <CharCard
            key={char.created}
            name={char.name}
          />
        )
      })}
    </div>
  );
}

const Title = styled.h1`
color: #443e3e;
text-shadow: 1px 1px 5px #fff;
`

export default App;
