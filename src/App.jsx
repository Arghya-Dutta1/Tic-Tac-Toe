import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  // State for player names
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [namesSet, setNamesSet] = useState(false);

  // Function to handle player names submission
  const handleNamesSubmit = () => {
    const p1 = prompt("Enter Player 1's name:");
    const p2 = prompt("Enter Player 2's name:");
    setPlayer1(p1);
    setPlayer2(p2);
    setNamesSet(true);
  };

  return (
    <div className="App">
      {!namesSet ? (
        <div>
          <button onClick={handleNamesSubmit}>Set Player Names</button>
        </div>
      ) : (
        <div>
          <h2>Welcome {player1} and {player2} to Tic Tac Toe!</h2>
          <Board player1={player1} player2={player2} />
        </div>
      )}
    </div>
  );
}

export default App;
