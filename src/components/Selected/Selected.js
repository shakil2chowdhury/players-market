import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Selected.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'

const Selected = (props) => {
    const select = props.select;
    //reducing array for total budget adding
    const totalBudget = select.reduce((total,player) => total + Number(player.salary),0);
    //function for handling numbers value
    const handleNumber = num => {
        const newNum = num.toFixed(2);
        return newNum;
    }
    return (
        <div className="selected-container">
            <h2>Selection Summary</h2>
            <h4>Total Players: {select.length}</h4>
            <p className="select-heading">Selected Players</p>
            <div className="players-container">
                {select.map(player => <SelectedPlayer player={player} />)}
            </div>
            <h5>Total Budget: ${handleNumber(totalBudget)}</h5>
            <Button onClick={props.handleTeam}><FontAwesomeIcon icon={faFutbol} /> Create Team</Button>
        </div>
    );
};

export default Selected;