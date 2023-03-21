import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";
import s from "./style.module.css";

const FilterPerson = ({ setStatus, setPageNumber, setGender, setEspecies }) => {
  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setEspecies("");
    window.location.reload(false);
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div
        onClick={clear}
        className={`${s.cursor} text-center text-primary text-decoration-underline`}
      >
        Clear Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setEspecies={setEspecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default FilterPerson;
