import React from "react";
import s from "./style.module.css";

const CarPerson = ({ results }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <div
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${s.cards} d-flex flex-column justify-content-center`}
          >
            <img src={image} alt="" className={`${s.img} img-fluid`} />
            <div className={`${s.content} content`}>
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div>
                  <div
                    className={`${s.badge} position-absolute badge bg-danger`}
                  >
                    {status}
                  </div>
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div>
                  <div
                    className={`${s.badge} position-absolute badge bg-success`}
                  >
                    {status}
                  </div>
                </div>
              );
            } else {
              return (
                <div>
                  <div
                    className={`${s.badge} position-absolute badge bg-secundary`}
                  >
                    {status}
                  </div>
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default CarPerson;
