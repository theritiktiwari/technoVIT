import About from "../Components/About";
import Coordinators from "../Components/Coordinators";
import Gallery from "../Components/Gallery";

const image1 = "https://www.ingredientsnetwork.com/47/pdcnewsitem/07/99/14/IFIC-study-environmental-sustainability-is-important-to-consumers.jpeg";
const image2 = "https://standrewshospital.com.au/sfimages/default-source/default-album/shutterstock_760733977.jpg?sfvrsn=7942a265_4";
const image3 = "https://www.concentrix.com/wp-content/uploads/2021/09/5-key-factors-featured.jpg";

export default function Home({ siteName }) {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>September 23, 2022</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>September 24, 2022</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>September 25, 2022</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <About siteName={siteName} />

      <div className="container-fluid p-5 bg-dark">
        <h2 className="text-center text-light">Schedule</h2>
        <div className="btn-group d-flex justify-content-center align-items-center px-4">
          <a href="#" className="btn btn-light m-2">Day 1</a>
          <a href="#" className="btn btn-light m-2">Day 2</a>
          <a href="#" className="btn btn-light m-2">Day 3</a>
        </div>
      </div>

      <Coordinators />

      <div className="container-fluid p-5 text-light bg-dark" id="venue">
        <h2 className="text-center mb-3">Venue</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040704935981!2d80.15123961474222!3d12.840646221212731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Chennai!5e0!3m2!1sen!2sin!4v1659459692314!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <Gallery />
    </>
  )
}
