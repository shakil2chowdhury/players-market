import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Player.css'
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    //destructuing player datas
    const {first_name, last_name, salary, avatar} = props.player;
    return (
            <Card>
                <Card.Img classes="card-img-size" variant="top" src={avatar} />
                <Card.Body>
                <Card.Title>{first_name + " " + last_name}</Card.Title>
                <Card.Text>
                    <p>Salary: ${salary}</p>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button onClick={() => props.handleSelect(props.player)} ><FontAwesomeIcon icon={faCheckCircle} /> Select Now</Button>
                </Card.Footer>
            </Card>
    );
};

export default Players;