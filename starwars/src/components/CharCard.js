import React from 'react';
import styled from 'styled-components';

const CharCard = props => {
    return (
        <div className='char-list' key={props.id}>
            <CardWrapper>
               <h1>{props.name}</h1> 
               <p>{props.birth_year}</p>   
            </CardWrapper>
        </div>
    );
};


const CardWrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    margin: 0 auto;
    width: 350px;
`

export default CharCard;