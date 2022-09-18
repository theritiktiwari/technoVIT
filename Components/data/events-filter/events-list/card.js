import React from "react";
import classes from "./card.module.css";

function Card(props) {
  const { dept } = props;
  let color = "#000";
  if (dept === 1) {
    color = "#e67300";
  } else if (dept === 2) {
    color = "#ffff00";
  } else if (dept === 3) {
    color = "#4da6ff";
  } else if (dept === 4) {
    color = "#ff4d88";
  } else if (dept === 5) {
    color = "#e62e00";
  } else if (dept === 6) {
    color = "#737373";
  } else if (dept === 7) {
    color = "#006652";
  } else if (dept === 8) {
    color = "#990099";
  } else if (dept === 9) {
    color = "#ccff99";
  } else if (dept === 10) {
    color = "#29a329";
  }
  return (
    <div
      className={classes.card}
      style={{
        borderLeft: `solid`,
        borderColor: color,
        borderWidth: "10px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
