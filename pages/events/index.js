import { useRouter } from "next/router";
import React, { Fragment } from "react";
import Day1 from "../../Components/data/Sept23.json";
import { getAllEvents23 } from "../../Components/data/events-filter/conditions";
import EventsList from "../../Components/data/events-filter/events-list/events-list";
import EventFilterBox from "../../Components/data/events-filter/events-list/event-filter-box";

function AllEvents(props) {
  const allEvents = getAllEvents23();
  const router = useRouter();

  const findEventsHandler = (date, dept) => {
    router.push(`/events/${date}/${dept}`);
  };

  return (
    <Fragment>
      <EventFilterBox onSearch={findEventsHandler} />

      <EventsList items={allEvents} />
    </Fragment>
  );
}

export default AllEvents;
