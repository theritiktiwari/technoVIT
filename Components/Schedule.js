import React from "react";
import schedule from "../Components/data/schedule";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Div from "./AnimatedDiv";

const Schedule = () => {
  const popup = (e) => {
    e.preventDefault();
    toast.warn("Please wait for the schedule!", {
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
      <Div className="container-fluid p-5 bg-invert">
        <h2 className="text-center">Schedule</h2>
        <div className="btn-group d-flex justify-content-center align-items-center px-4">
          {schedule &&
            schedule.map((item, index) => {
              return (
                <>
                  <a
                    key={index}
                    target="_blank"
                    href={item.link}
                    onClick={!item.link ? (e) => popup(e) : ""}
                    className="btn btn-dark m-2"
                  >
                    {item.name}
                  </a>
                </>
              );
            })}
        </div>
      </Div>
    </>
  );
};

export default Schedule;
