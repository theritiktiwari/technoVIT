import React, { Fragment } from "react";
import schedule from "../Components/data/schedule";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";

const Schedule = () => {
  const popup = (e) => {
    e.preventDefault();
    toast.warn("Schedule will be available soon!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container ps-5" id="schedule">
        <div className="container shadow-lg p-3 my-5 bg-body rounded schedule-section row d-flex justify-content-between align-items-center">
          <div className="col-12 col-lg-6 mt-4">
            <div
              className="d-flex justify-content-around align-items-center flex-column text px-4 w-100"
              style={{ height: "100%" }}
            >
              {schedule &&
                schedule.map((item, index) => {
                  return (
                    <>
                      <a
                        key={index}
                        rel="noreferrer"
                        target="_blank"
                        href={item.link}
                        onClick={!item.link ? (e) => popup(e) : ""}
                        className="btn btn-invert m-2 w-100"
                      >
                        {item.name}
                      </a>
                    </>
                  );
                })} 

            </div>
          </div>
          <div className="col-12 col-lg-6 rounded-2 image d-flex align-items-center justify-content-center">
            <h2 className="mb-4 fw-bold heading">Schedule</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
