import React from "react";

function EventTime(props) {
  const { time } = props;
  // 2022-09-23T19:00:00.000Z
  const humanReadableTime = time.slice(11,16);
  return <div>{humanReadableTime}</div>;
}

export default EventTime;
