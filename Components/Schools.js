import Head from "next/head";
import Link from "next/link";
import NaturalImage from "./NaturalImage";
import schoolData from "../Components/data/schools";
import { motion } from "framer-motion";
const userImage = "https://i.ibb.co/yWZR9j0/Avatar.png";

const marqueeVariants = {
  animate: {
    x: [0, -1500],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      },
    },
  },
};

const Schools = ({ siteName }) => {
  return (
    <div>
      <Head>
        <title>School Fests | {siteName}</title>
      </Head>
      <div className="container my-5 school">
        <h1 className="text-center my-5 animate__animated animate__lightSpeedInRight">
          School Fests
        </h1>

        <motion.div
          className="container d-inline-flex flex-wrap justify-content-center gap-5 "
          //   variants={marqueeVariants}
          //   animate="animate"
        >
          {schoolData &&
            schoolData.map((school, index) => {
              return (
                <Link href={`/schools/${school.link}`} id={index}>
                  <a
                    className="d-flex flex-column justify-content-center"
                    style={{ alignItems: "center" }}
                  >
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {/* <NaturalImage
                          src={school.image ? `${school.image}` : userImage}
                          alt={school.name}
                          width={10000}
                          height={10000}
                        /> */}
                      <img
                        src={school.image ? `${school.image}` : userImage}
                        alt={school.name}
                        style={{ width: "100%" }}
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title text-center">{school.name}</h5>
                    </div>
                  </a>
                </Link>
              );
            })}
        </motion.div>
      </div>
    </div>
  );
};

export default Schools;
