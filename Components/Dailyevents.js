import { useState } from "react";
import data from "./data/Dailyeventsdata";
import { motion, LayoutGroup } from "framer-motion";

const image = "https://i.ibb.co/HYj6Tgk/environmental-sustainability.jpg";

const Dailyevents = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1 className="text-center my-5 heading">Daily Events</h1>
      <div className="container d-flex flex-wrap justify-content-around">
        {data &&
          data.map((item, index) => {
            return item.name ? (
              <div id={index}>
                <a href="https://vitchennaievents.com/technovit/"><div
                  className="card p-3 m-2 expanded"
                  style={{ width: "18rem", height: "28rem" }}
                >
                  <img
                    src={item.image ? item.image : image}
                    className="card-img-top"
                    alt={item.name}
                    height={2000}
                    width={1000}
                  />
                  <div className="card-body" style={{ padding: "1rem 0rem" }}>
                    <h5 className="card-title text-center">{item.name}</h5>
                    <p className="text-center">
                      <span style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
                        Venue:{" "}
                      </span>
                      {item.venue}
                    </p>
                    <p className="text-center">
                      <span style={{ fontWeight: 600 }}>Timing: </span>
                      {item.time}
                    </p>
                  </div>
                </div></a>
              </div>
            ) : (
              <h4 className="text-center my-4">No listed events.</h4>
            );
          })}
      </div>
    </div>
  );
};

export default Dailyevents;