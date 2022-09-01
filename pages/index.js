import Landing from '../Components/Landing'
import Clock from '../Components/Clock'
import About from '../Components/About'
import Schedule from '../Components/Schedule'
import Coordinators from '../Components/Coordinators'
import Venue from '../Components/Venue'
import Gallery from '../Components/Gallery'

export default function Home({ siteName, date }) {
  return (
    <>
      <Landing />
      <About siteName={siteName} />
      <Clock date={date} />
      <Coordinators />
      <Schedule />
      <Venue />
      <Gallery />
    </>)
}
