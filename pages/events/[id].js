import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Day1 from "../../Components/data/Sept23.json";
import {
  getAllEvents,
  getFilteredEvents,
} from "../../Components/data/events-filter/conditions";
import EventsList from "../../Components/data/events-filter/events-list/events-list";
import EventFilterBox from "../../Components/data/events-filter/events-list/event-filter-box";
import EventFiltered from "../../Components/data/events-filter/events-list/event-filtered";

function AllEvents(props) {
  const router = useRouter();
  const day = router.query.id;

  // const allEvents;
  const filteredEvents = getFilteredEvents();
  if (day === "1") {
    const date = new Date("2022-09-23");
  } else if (day === "2") {
    const date = new Date("2022-09-24");
  } else if (day === "3") {
    const date = new Date("2022-09-25");
  } else {
    return <p>Invalid day!</p>;
  }

  const findEventsHandler = (date, dept) => {
    router.push(`/events/${dept}/${date}`);
  };

  return (
    <Fragment>
      <EventFilterBox onSearch={findEventsHandler} />

      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default AllEvents;
