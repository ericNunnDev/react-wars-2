import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components';

const CharCard = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <CharList key={props.id}>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                <h1>{props.name}</h1> 
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                    Birth Year: {props.birth_year}
                    </DropdownItem>
                    <DropdownItem>
                    Hair Color: {props.hair_color}
                    </DropdownItem>
                    <DropdownItem>
                    Mass: {props.mass} kg
                    </DropdownItem>
                    <DropdownItem>
                    Height: {props.height} inches
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </CharList>
    );
};


const CharList = styled.div`
    margin: 10px auto;
    width: 350px;
`

export default CharCard;