import React from "react";

const Square = (props) => {
  console.log(props.squares, props.player); 

  const handleClick = () => {
    if (!props.squareValue) {
      if (props.player) {
        const newSquares = [...props.squares];
        newSquares[props.index] = "X";
        props.setSquares(newSquares);
        props.setPlayer(!props.player);
      } else {
        const newSquares = [...props.squares];
        newSquares[props.index] = "O";
        props.setSquares(newSquares);
        props.setPlayer(!props.player);
      }
    }
  };

  return (
    <div className="square" onClick={handleClick}>
      {props.squareValue === "O" ? (
        <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" alt="O" />
      ) : (
        props.squareValue
      )}
    </div>
  );
};

export default Square;
