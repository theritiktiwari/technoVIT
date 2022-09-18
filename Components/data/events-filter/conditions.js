import React from "react";
import Sept23 from "../Sept23.json";
import EventFiltered from "./events-list/event-filtered";

function Conditions() {}

export function getAllEvents23() {
  return Sept23;
}

export function getFilteredEvents(date, dept) {
  if (date === 0 && dept === 0) {
    return Sept23;
  } else if (date === 23) {
    return Sept23.filter((event) => event.resource === dept);
  } else if (date === 24) {
    return Sept23.filter((event) => event.resource === dept);
  } else if (date === 25) {
    return Sept23.filter((event) => event.resource === dept);
  } else {
    return [];
  }
}

export default Conditions;
