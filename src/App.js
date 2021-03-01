import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './components/Player/Player';
import Selected from './components/Selected/Selected';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Players from './fakeData/Players.json'

function App() {
  //state for players data load
  const [players, setPlayers] = useState([]);
  //state for selection panel
  const [select, setSelect] = useState([]);
  //loading players data from player json file
  useEffect(()=>{
    setPlayers(Players)
  },[]);
  //event handler for player selection
  const handleSelect = (player) => {
    const newSelect = [...select, player];
    setSelect(newSelect);
  }
  //event handler for creating team finally
  const handleTeam = () => {
    if(select.length === 0) alert("There are no players in your team");
    else alert("Thanks for creating your team");
  }
  return (
    <div>
      <div className="header-container">
          <h1>Players Market</h1>
      </div>
      <div className="body-container">
        <Container>
          <Row>
            <Col sm={8} className="border-right border-dark">
              <div className="player-container">
                {
                  //mapping players for taking each player data and sending to Player component by props
                  players.map(player => <Player player={player} key={player.key} handleSelect={handleSelect}/>)
                }
              </div>
            </Col>
            <Col sm={4}><Selected select={select} handleTeam={handleTeam}/></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
