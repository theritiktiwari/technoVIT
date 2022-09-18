import React from "react";

function EventDate(props) {
  const { time } = props;
  // 2022-09-23T19:00:00.000Z
  const humanReadableDate = new Date(time).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
  });
  return <div>{humanReadableDate}</div>;
}

export default EventDate;
