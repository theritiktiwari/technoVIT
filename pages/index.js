import About from '../Components/About';
import Clock from '../Components/Clock';
import Coordinators from '../Components/Coordinators';
import Gallery from '../Components/Gallery';
import Landing from "../Components/Landing";
import Schedule from '../Components/Schedule';
import Schools from '../Components/Schools';
import Social from '../Components/Social';
import Venue from '../Components/Venue';
import CentralEvents from "../Components/CentralEvents";
import Dailyevents from "../Components/Dailyevents";
import Div from "../Components/AnimatedDiv";

export default function Home({ siteName, date, count }) {
  return (
    <>
      <Landing />
      <About siteName={siteName} />
      <Clock date={date} />
      <CentralEvents />
      <Dailyevents />
      <Schedule />
      <Schools />
      <Coordinators />
      <Venue />
      <Gallery />
      <Social count={count} />
    </>
  )
}
