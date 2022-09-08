import About from '../Components/About';
import Clock from '../Components/Clock';
import Coordinators from '../Components/Coordinators';
import Gallery from '../Components/Gallery';
import Landing from "../Components/Landing";
import Schedule from '../Components/Schedule';
import Schools from '../Components/Schools';
import Social from '../Components/Social';
import Venue from '../Components/Venue';

export default function Home({ siteName, date, count }) {
  return (
    <>
      <Landing />
      <About siteName={siteName} />
      <Clock date={date} />
      <Schedule />
      <Schools />
      <Coordinators />
      <Venue />
      <Gallery />
      <Social count={count} />
    </>
  )
}
