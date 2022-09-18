import React, { Fragment, useRef } from "react";
import classes from "./event-filter-box.module.css";
import EventTitle from "./event-title";

function EventFilterBox(props) {
  const dateInputRef = useRef();
  const deptInputRef = useRef();
  const dept = [
    "bandVIT",
    "Connectivitieee",
    "Diseno",
    "Glitz",
    "Qubit",
    "Srishti",
    "Taikuun",
    "Lilacs",
    "VITness",
    "VSplash",
  ];

  const submitHandler = (event) => {
    event.preventDefault();
    const selectedDate = dateInputRef.current.value;
    const selectedDept = deptInputRef.current.value;

    props.onSearch(selectedDate || props.date, selectedDept || props.dept);
  };
  return (
    <div className={classes.margin}>
      {props.date && props.dept && (
        <EventTitle date={props.date} dept={props.dept} />
      )}
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="year">Date</label>
            <select id="year" ref={dateInputRef}>
              <option value="0">All</option>
              <option value="23">September 23</option>
              <option value="24">September 24</option>
              <option value="25">September 25</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="month">Department</label>
            <select id="month" ref={deptInputRef}>
              <option value="0">All</option>
              {dept.map((deptName, index) => (
                <option value={index + 1}>{deptName}</option>
              ))}
            </select>
          </div>
        </div>
        <button>Find Events</button>
      </form>
    </div>
  );
}

export default EventFilterBox;
