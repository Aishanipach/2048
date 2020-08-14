import React, { useState, useEffect } from 'react';
import {cloneDeep} from 'lodash';
import { useEvent, getColors } from './util';

function App() {

  const UP_ARROW = 38;
  const DOWN_ARROW = 40;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW = 39;
  const[data, setData] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],


  ]);

  const [gameOver, setGameOver] = useState(false);
  //Initialize
  const initialize = () => {
  // console.log("CALLING INITIALIZE");

    let newGrid = cloneDeep(data);
    console.log(newGrid);

    addNumber(newGrid);
    console.table(newGrid);
    addNumber(newGrid);
    console.table(newGrid);
    setData(newGrid);

  };

  //AddNumber - Add an item

  const addNumber = (newGrid) => {
    let added = false;
    let gridFull= false;
    let attempts = 0; 
    while(!added) {
      if(gridFull){
        break;
      }
    

      let rand1= Math.floor(Math.random()*4);
      let rand2 = Math.floor(Math.random() * 4);
      attempts++;
      if (newGrid[rand1][rand2] == 0){
        newGrid[rand1][rand2] = Math.random() > 0.5 ? 2:4;
        added =true;
      }
    }

  }
  //Swipe- Right, Left, Up and Down
  
  // Check Gameover 
  //Reset
  useEffect(() => {
    initialize();
    // document.addEventListener("keydown", handleKeyDown);
  }, []);

  return(
    <div
      style={{
        background: "#AD9D8F",
        width: "max-content",
        margin: "auto",
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
        }}
      >
      {data.map((row, oneIndex) => {
    return (
      <div style={{ display: "flex" }} key={oneIndex}>
        {row.map((digit, index) => (
          <Block num={digit} key={index} />
        ))}
      </div>
      );
    })}
    </div>
  );
}

const Block = ({ num }) => {
  const { blockStyle } = style;

  return (
    <div
      style={{
        ...blockStyle,
        //background: getColors(num),
        color: num === 2 || num === 4 ? "#645B52" : "#F7F4EF",
      }}
    >
      {num}
      {/*num !== 0 ? num : ""*/}
    </div>
  );
};

const style = {
  blockStyle: {
    height: 80,
    width: 80,
    background: "lightgray",
    margin: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 45,
    fontWeight: "800",
    color: "white",
  },    
} 
export default App;
