import React from "react";
import classes from "./event-title.module.css";

function EventTitle(props) {
  const dept = [
    "Bandvit",
    "Connectivitieee",
    "Diseno",
    "Glitz",
    "Qubit",
    "Srishti",
    "Taikuun",
    "Lilacs",
    "Vitness",
    "Vsplash",
  ];
  return (
    <div>
      <p className={classes.title}>
        Events on <span>{props.date}</span> by{" "}
        <span>{dept[props.dept - 1]}</span>
      </p>
    </div>
  );
}

export default EventTitle;
