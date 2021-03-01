import React from 'react';
import './SelectedPlayer.css'

const SelectedPlayer = (props) => {
    //getting each player data by props
    const {first_name, last_name, avatar, salary} = props.player;
    return (
        <div className="player-info">
            <img class="player-avatar" src={avatar} alt=""/>
            <p>{first_name+" "+last_name}</p>
            <p>Salary: ${salary}</p>
        </div>
    );
};

export default SelectedPlayer;