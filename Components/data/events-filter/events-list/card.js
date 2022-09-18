import React from "react";
import classes from "./card.module.css";

function Card(props) {
  const { dept } = props;
  let color = "#000";
  if (dept === 1) {
    color = "#ffcc9c";
  } else if (dept === 2) {
    color = "#ffe599";
  } else if (dept === 3) {
    color = "#e0dcdc";
  } else if (dept === 4) {
    color = "#e0dcdc";
  } else if (dept === 5) {
    color = "#dd7e6b";
  } else if (dept === 6) {
    color = "#d9d9d9";
  } else if (dept === 7) {
    color = "#e0dcdc";
  } else if (dept === 7) {
    color = "#e0dcdc";
  } else if (dept === 9) {
    color = "#d9ead3";
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
