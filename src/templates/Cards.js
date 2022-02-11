import React,{Fragment} from 'react';
//Libraries
import {Card} from 'react-bootstrap';
//functions


const Cards=(props)=>{
    return(

        <Fragment>
            <Card>
                <Card.Header>{props.header}</Card.Header>
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.text}
                </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    );
}
export default Cards;