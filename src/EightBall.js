import React, { useState } from 'react';
import './EightBall.css'
import { generateRandomIdx } from "./helpers"

const defaultMsg = "Think of a Question";
const defaultColor = "black";


function EightBall(props) {
  const [msg, setMsg] = useState(defaultMsg);
  const [color, setColor] = useState(defaultColor);
  const [counterObj, setCounterObj] = useState({redCounter: 0, greenCounter: 0, goldenrodCounter: 0});
  // const [redCounter, setRedCounter] = useState(0);
  // const [greenCounter, setGreenCounter] = useState(0);
  // const [goldenrodCounter, setGoldenrodCounter] = useState(0);

  function handleBallClick() {
    let answerIdx = generateRandomIdx(props.answers.length);
    let { msg, color } = props.answers[answerIdx];
    if (color === "red") {
      // setRedCounter(redCounter + 1);
      setCounterObj({
        redCounter: (counterObj.redCounter + 1),
        greenCounter: counterObj.greenCounter,
        goldenrodCounter: counterObj.goldenrodCounter
      });
    } else if (color === "green") {
      // setGreenCounter(greenCounter + 1);
      setCounterObj({redCounter: counterObj.redCounter, greenCounter: (counterObj.greenCounter + 1), goldenrodCounter: counterObj.goldenrodCounter});

    } else if (color === "goldenrod") {
      // setGoldenrodCounter(goldenrodCounter + 1);
      setCounterObj({redCounter: counterObj.redCounter, greenCounter: counterObj.greenCounter, goldenrodCounter: (counterObj.goldenrodCounter + 1)});

    }
    setMsg(msg);
    setColor(color);
    console.log(setCounterObj);
  }

  function handleResetClick() {
    setMsg(defaultMsg);
    setColor(defaultColor);
    setCounterObj({redCounter: 0, greenCounter: 0, goldenrodCounter: 0});
    // setRedCounter(0);
    // setGreenCounter(0);
    // setGoldenrodCounter(0);
  }

  return (
    <div>
      <div className="EightBall" onClick={ handleBallClick } style={ {backgroundColor: color} }>
        <p className="EightBall-msg">{ msg }</p>
      </div>
      <button className="EightBall-reset"onClick={ handleResetClick }>Reset</button>
      <div className="EightBall-counters">
        <div>Red Count: { counterObj.redCounter }</div>
        <div>Green Count: { counterObj.greenCounter }</div>
        <div>Goldenrod Count: { counterObj.goldenrodCounter }</div>
      </div>
      {/* <EightBall buttonHandler={ handleBallClick } /> */}

    </div>

  )
}

export default EightBall;

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]
}