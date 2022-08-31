import React from "react";
import Link from "next/link";
import Image from "next/image";

const logo = "https://i.imgur.com/kWQb9MI.png";

const Navbar = ({ siteName }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              {logo ? <Image src={logo} height={50} width={150} alt={"technoVIT"} /> : siteName}
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Schedule
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href="#">
                      <a className="dropdown-item">Day 1</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="dropdown-item">Day 2</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a className="dropdown-item">Day 3</a>
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link href="/#venue">
                  <a className="nav-link">Venue</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/schools">
                  <a className="nav-link">Schools</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#gallery">
                  <a className="nav-link">Gallery</a>
                </Link>
              </li>
              <li className="nav-item">
                <a href="https://drive.google.com/file/d/1PBPpzBG5ICDf-8enbA9yn0I-ekCvbX5P/preview" target={"_blank"} className="nav-link me-2">Sponsors</a>
              </li>
              <li className="nav-item">
                <a href="https://vitchennaievents.com/technovit/" target={"_blank"} className="btn btn-invert">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
