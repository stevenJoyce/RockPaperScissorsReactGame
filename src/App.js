import './App.css';
import { useState } from 'react';
// allows the user to find the run game component to run the game
import RunGame from './Components/RunGame';
import BestOfGame from './Components/BestOfGame';

function App() {
  //variables to allow user to create a best of version of the game
  const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [bestOf, setBestOff] = useState(0);
  //boolean variables to be used on the app
  const [startGame, setStartGame] = useState(false);
  const [best, setBest] = useState(false);
  const [bChoice, setBChoice] = useState(true);
  const [aChoice, setAChoice] = useState(true);
  const [series, setSeries] = useState(false);

  // function that allows the user to set the winning total and start the game
  const runStart = () => {
    return (
      <>
        <label>
          <b> Select a winning Score  </b>
          {/* utilizing the select form input to show all variables stored
           in the score array */}
          <select onChange={(e) => setBestOff(e.target.value)}>
            {score.map((x, y) =>
              <option key={y}> {x}</option>
            )}
          </select>
        </label> <br />
        {/* Button that starts the game */}
        <button onClick={runGame} id="btn"> Save </button>

      </>

    )
  }

  //function to run the best of version of the game
  const bc = () => {
    setAChoice(false);
    setBChoice(false);
    setBest(true);
    
  }

  //function to run the game with 1 round
  const ac = () => {
    setAChoice(false);
    setBChoice(false);
    setStartGame(true);
  }


  // function the unhides the bestOf game and hides the pick winning score function
  const runGame = () => {
    setSeries(true);
    setBest(false);
  }
  return (
    <div className="App">
      <h1 id="head"> ROCK | PAPER | SCISSORS </h1>
      {/* By putting the function calls in brackets to use 
          boolean variables to hide/unhide the winningScore and game functions
      */}  
      {
        aChoice ? <button onClick={ac} id='btn'>  One Round </button> :null

      }
      {
        bChoice ? <button onClick={bc} id='btn'> Best Of Series </button>:null
      }
      {
        best ? runStart() : null
      }
      {
        startGame ? <RunGame /> : null
      }
      {
        series ? <BestOfGame winScore={bestOf} /> : null
      }
    </div>
  )
}

export default App;