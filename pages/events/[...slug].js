import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { getFilteredEvents } from "../../Components/data/events-filter/conditions";
import EventFilterBox from "../../Components/data/events-filter/events-list/event-filter-box";
import EventTitle from "../../Components/data/events-filter/events-list/event-title";
import EventsList from "../../Components/data/events-filter/events-list/events-list";

function FilteredDeptPage() {
  const router = useRouter();
  console.log(router);
  if (router.query.slug === undefined) {
    return <p>Loading...</p>;
  }
  if (router.query.slug === undefined) {
    return <p>Loading ....</p>;
  }
  const date = +router.query.slug[0];
  const dept = +router.query.slug[1];
  const filteredEvents = getFilteredEvents(date, dept);
  const findEventsHandler = (date, dept) => {
    router.push(`/events/${date}/${dept}`);
  };
  return (
    <Fragment>
      <EventFilterBox onSearch={findEventsHandler} date={date} dept={dept} />

      <EventsList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredDeptPage;
