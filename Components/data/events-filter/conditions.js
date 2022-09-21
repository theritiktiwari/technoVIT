import React from "react";
import Sept23 from "../Sept23.json";
import Sept24 from "../Sept24.json";
import Sept25 from "../Sept25.json";
import EventFiltered from "./events-list/event-filtered";

function Conditions() {}

export function getAllEvents() {
  return [...Sept23, ...Sept24, ...Sept25];
}

export function getFilteredEvents(date, dept) {
  if (date === 0 && dept === 0) {
    return getAllEvents();
  } else if (date === 23 && dept === 0) {
    return Sept23;
  } else if (date === 24 && dept === 0) {
    return Sept24;
  } else if (date === 25 && dept === 0) {
    return Sept25;
  } else if (date === 0) {
    return getAllEvents().filter((event) => event.resource === dept);
  } else if (date === 23) {
    return Sept23.filter((event) => event.resource === dept);
  } else if (date === 24) {
    return Sept24.filter((event) => event.resource === dept);
  } else if (date === 25) {
    return Sept25.filter((event) => event.resource === dept);
  } else {
    return [];
  }
}

export default Conditions;