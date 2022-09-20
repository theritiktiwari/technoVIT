import React from "react";
import data from "./data/Centraleventsdata";
import NaturalImage from "./NaturalImage";
const image = "https://i.ibb.co/HYj6Tgk/environmental-sustainability.jpg";

const Dailyevents = () => {
  return (
    <div className="school">
      <h1 className="text-center my-5 heading">Central Committee Events</h1>
      <div className="container d-flex flex-wrap justify-content-around">
        {data && data.map((item, index) => {
          return item.name ?
            <a href="https://vitchennaievents.com/technovit/" id={index}>
              <div className="card p-3 m-2" style={{ width: "18rem", height: "25rem" }} >
                <NaturalImage className={"poster-image image"} src={item.image || image} width={1000} height={1200} />
                <div className="card-body">
                  <h5 className="card-title text-center text-dark">{item.name}</h5>
                  <p className="text-center text-dark mb-0"><span style={{ fontWeight: 600 }}>Venue: </span>{item.venue}</p>
                  <p className="text-center text-dark mb-0"><span style={{ fontWeight: 600 }}>Timing: </span>{item.time}</p>
                </div>
              </div>
            </a> : <h4 className='text-center my-4'>No listed events.</h4>;
        })}
      </div>
    </div>
  );
};

export default Dailyevents;