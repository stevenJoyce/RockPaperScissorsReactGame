import { useState } from 'react';
//utilize the react-icons to 
import { IconContext } from "react-icons";
import { FaRegHandBackFist } from "react-icons/fa6";
import { FaRegHandPaper } from "react-icons/fa";
import { LiaHandRock } from "react-icons/lia";
import { LiaHandScissors } from "react-icons/lia";
import { IoReloadOutline } from "react-icons/io5";

const RunGame = () => {
    //console.log(winScore); -- test the ability to receive variables from app.js page
    //variables to be used in the component
    const defAction = <FaRegHandBackFist size={10} />;
    const result = ["rock", "paper", "scissors"];
    let user = 0;
    let cpu = 0;
    let matchResult = 0;
    const [userCount, setUserCount] = useState(0);
    const [cpuCount, setcpuCount] = useState(0);
    const [drawCount, setdrawCount] = useState(0);
    const [user1, setUser1] = useState(defAction);
    const [user2, setUser2] = useState(defAction);
    const [mres, setMres] = useState(" ");

    /*functions to add a score for each way that the user can
     score in the game rock, paper or scissors  */
    const uInc = () => {
        setUserCount(userCount + 1);
    }
    const cInc = () => {
        setcpuCount(cpuCount + 1);
    }
    const dInc = () => {
        setdrawCount(drawCount + 1);
    }
    /* function to generate a random cpu result 
    using the result array created above */
    const getRandomResult = () => {
        return result[Math.floor(Math.random() * result.length)]
    }
    /*function to utilize the random function to generate the icon 
    that is associated with that result and store it as the cpu result*/
    const CpuControls = () => {
        const answer = getRandomResult();
        console.log(answer);
        //CPU Controls
        if (answer === "rock") {
            // console.log(answer);
            setUser2(LiaHandRock);
            cpu = "rock";
        }
        else if (answer === "paper") {
            // console.log(answer);
            setUser2(FaRegHandPaper);
            cpu = "paper";
        }
        else if (answer === "scissors") {
            // console.log(answer);
            setUser2(LiaHandScissors);
            cpu = "scissors";
        }
    }

    /* These 3 functions are used to generate the user icon.
       Each function calls the whoWon function*/
    const runRock = () => {
        setUser1(LiaHandRock);
        CpuControls();
        user = "rock";
        whoWon();
    }

    const runPaper = () => {
        setUser1(FaRegHandPaper);
        CpuControls();
        user = "paper";
        whoWon();
    }

    const runScissors = () => {
        setUser1(LiaHandScissors);
        CpuControls();
        user = "scissors";
        whoWon();

    }

    /* This function generates the winner of the round 
       and uses the incremental functions created to
       update the table dynamically */

    const whoWon = () => {
        if (user === "rock" && cpu === "scissors") {
            matchResult = "USER WINS";
            uInc();
        }
        else if (user === "rock" && cpu === "paper") {
            matchResult = "CPU WINS";
            cInc();
        }
        else if (user === "rock" && cpu === "rock") {
            matchResult = "DRAW";
            dInc();
        }
        else if (user === "paper" && cpu === "rock") {
            matchResult = "USER WINS";
            uInc();
        }
        else if (user === "paper" && cpu === "scissors") {
            matchResult = "CPU WINS";
            cInc();
        }
        else if (user === "paper" && cpu === "paper") {
            matchResult = "DRAW";
            dInc();
        }
        else if (user === "scissors" && cpu === "rock") {
            matchResult = "CPU WINS";
            cInc();
        }
        else if (user === "scissors" && cpu === "paper") {
            matchResult = "USER WINS";
            uInc();
        }
        else if (user === "scissors" && cpu === "scissors") {
            matchResult = " DRAW";
            dInc();
        }
        else {
            matchResult = "ERROR - GAME NOT CORRECT";
        }
        console.log(matchResult);
        setMres(matchResult);
        return matchResult;
    }

    //fumction to restart the game
    const reset = () => {
        window.location.reload()
    }

    return (
        <IconContext.Provider value={{ color: 'red', size: '70px' }}>
            <div className="App">

                {/* calling the 2 variables that symbolize the 
                user and cpu scores */}
                &nbsp; {user1} &emsp; {user2}
                <br />
                USER &emsp; &emsp; &emsp; CPU
                <br />
                {/* buttons that allow the player to choose between 
                    rock, paper and scissors and generate the cpu choice*/}
                <button onClick={runRock} id='btn'>  Rock </button>
                <button onClick={runPaper} id='btn'> Paper </button>
                <button onClick={runScissors} id='btn'> Scissors </button>
                <br />
                {/*button to restart the game */}
                <button onClick={reset} id='btn'> <IoReloadOutline size={28} />  </button>
                <br />
                {/* variable that outputs the round result*/}
                <div id='result'>
                    {mres}
                </div>
                <br />
            </div>


        </IconContext.Provider>
    )

}

export default RunGame;