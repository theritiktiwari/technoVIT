import React from "react";

function EventTime(props) {
  const { time } = props;
  // 2022-09-23T19:00:00.000Z
  const humanReadableTime = new Date(time).toTimeString().slice(0, 9);

  return <div>{humanReadableTime}</div>;
}

export default EventTime;
