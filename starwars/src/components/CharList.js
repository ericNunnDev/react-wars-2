import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CharCard from './CharCard';

export default function CharList() {
    const [chars, setChars] = useState([]);

    useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            console.log(res.data)
          const charInfo = res.data.results;
          setChars(charInfo);
        })
        .catch(e => {
          console.log(e)
        })
    }, []);
    
      return (
        <div className="App">
          <Title>React Wars</Title>
          {chars.map(char => {
            return <CharCard
             key={char.name} 
             name={char.name} 
             birth_year={char.birth_year}
             hair_color={char.hair_color}
              />
            })}
        </div>
      );
    }
    
    const Title = styled.h1`
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
    `