import React from "react";
import moment from "moment";
import About from "../Components/About";
import Coordinators from "../Components/Coordinators";
import Gallery from "../Components/Gallery";
import Image from "next/image";

const image1 =
  "https://www.ingredientsnetwork.com/47/pdcnewsitem/07/99/14/IFIC-study-environmental-sustainability-is-important-to-consumers.jpeg";
const image2 =
  "https://standrewshospital.com.au/sfimages/default-source/default-album/shutterstock_760733977.jpg?sfvrsn=7942a265_4";
const image3 =
  "https://www.concentrix.com/wp-content/uploads/2021/09/5-key-factors-featured.jpg";
class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const then = new Date("2022-");
      const now = Date.now();
      console.log(now);
      console.log(then);
      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    // Mapping the date values to radius values
    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
      return null;
    }

    return (
      <div>
        <br></br>
        <br></br>
        <div className="countdown-wrapper">
          {days && (
            <div className="countdown-item">
              <SVGCircle radius={daysRadius} />
              {days}
              <span>days</span>
            </div>
          )}
          {hours && (
            <div className="countdown-item">
              <SVGCircle radius={hoursRadius} />
              {hours}
              <span>hours</span>
            </div>
          )}
          {minutes && (
            <div className="countdown-item">
              <SVGCircle radius={minutesRadius} />
              {minutes}
              <span>minutes</span>
            </div>
          )}
          {seconds && (
            <div className="countdown-item">
              <SVGCircle radius={secondsRadius} />
              {seconds}
              <span>seconds</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#6ebe49"
      strokeWidth="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

export default function Home({ siteName }) {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              layout="fill"
              src={image1}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>September 23, 2022</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              layout="fill"
              src={image2}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>September 24, 2022</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              layout="fill"
              src={image3}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>September 25, 2022</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Countdown
        timeTillDate="09 25 2022, 9:00 am"
        timeFormat="MM DD YYYY, h:mm a"
      />
      <br></br>
      <br></br>
<a className="btn btn-primary" style={{backgroundColor: "#3b5998"}} href="#!" role="button"
  ><i class="fab fa-facebook-f"></i
></a>
<a className="btn btn-primary" style={{backgroundColor: "#55acee"}} href="#!" role="button"
  ><i class="fab fa-twitter"></i
></a>
<a className="btn btn-primary" style={{backgroundColor: "#dd4b39"}} href="#!" role="button"
  ><i class="fab fa-google"></i
></a>
<a className="btn btn-primary" style={{backgroundColor: "#ac2bac"}} href="#!" role="button"
  ><i class="fab fa-instagram"></i
></a>
<a className="btn btn-primary" style={{backgroundColor: "#0082ca"}} href="#!" role="button"
  ><i class="fab fa-linkedin-in"></i
></a>
<br></br>
<br></br>

      <About siteName={siteName} />

      <div className="container-fluid p-5 bg-green">
        <h2 className="text-center">Schedule</h2>
        <div className="btn-group d-flex justify-content-center align-items-center px-4">
          <a href="#" className="btn btn-dark m-2">
            Day 1
          </a>
          <a href="#" className="btn btn-dark m-2">
            Day 2
          </a>
          <a href="#" className="btn btn-dark m-2">
            Day 3
          </a>
        </div>
      </div>

      <Coordinators />

      <div className="container-fluid p-5 text-light bg-green" id="venue">
        <h2 className="text-center mb-3">Venue</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040704935981!2d80.15123961474222!3d12.840646221212731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Chennai!5e0!3m2!1sen!2sin!4v1659459692314!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Gallery />
    </>
  );
}
