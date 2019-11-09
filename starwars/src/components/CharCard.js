import React from 'react';
import {
     Card, CardImg, CardText, CardBody,
     CardTitle, CardSubtitle
    } from 'reactstrap';

const CharCard = props => {
    return (
        <div className='char-list' key={props.created}>
            <Card>
                <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle></CardSubtitle>
                    <CardText></CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default CharCard;