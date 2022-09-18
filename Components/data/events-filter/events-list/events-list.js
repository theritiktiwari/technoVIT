import React, { Fragment } from "react";
import CalenderIcon from "./calender-icon";
import Card from "./card";
import EventDate from "./event-date";
import EventFilterBox from "./event-filter-box";
import EventTime from "./event-time";
import classes from "./events-list.module.css";
import { TimeIcon } from "./time-icon";

function EventsList(props) {
  const { items } = props;
  return (
    <Fragment>
      <div className={classes.grid}>
        {items.map((item) => (
          <Card dept={item.resource}>
            <p className={classes.title}>{item.title}</p>

            <div className={classes.flex}>
              <div className={classes.time}>
                <TimeIcon />
              </div>
              <EventTime time={item.start} />
              <p> - </p>
              <EventTime time={item.end} />
            </div>
            <div className={classes.flex}>
              <div className={classes.time}>
                <CalenderIcon />
              </div>
              <EventDate time={item.start} />
            </div>
          </Card>
        ))}
      </div>
    </Fragment>
  );
}

export default EventsList;
