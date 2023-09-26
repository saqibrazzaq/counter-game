import React, { useEffect, useState } from "react";

const MainBody = () => {
  const [count, setCount] = useState(0);
  const winScore = 10;
  const lostScore = -10;
  const [gameStatus, setGameStatus] = useState("In Progress");

  const handleAttack = () => {
    let newCount = count + (Math.random() * 10);
    newCount = Math.round(newCount);
    setCount(newCount);
  };

  const handleDefense = () => {
    let newCount = count - (Math.random() * 10);
    newCount = Math.round(newCount);
    setCount(newCount);
  };

  useEffect(() => {
    if (count >= 10) setGameStatus("You Won");
    else if (count <= -10) setGameStatus("You Lose");
    else setGameStatus("In Progress");
  }, [count])

  return (
    <div className="container">
      <h2>Count: {count}</h2>
      <h1>Game Status: {gameStatus}</h1>
      <div className="">
        <button className="mx-1 px-4 btn btn-success" onClick={handleAttack}>
          Attack
        </button>
        <button className="mx-1 px-4 btn btn-danger" onClick={handleDefense}>
          Defend
        </button>
      </div>
    </div>
  );
};

export default MainBody;
