import React from "react";
import { Format, Imput, Button } from "./styleWikiBar";
import s from "./style.module.css";

const WikiBar = ({ setSearch, setPageNumber }) => {
  return (
    <Format>
      <Imput
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters"
        type="text"
      />
      <Button>Search</Button>
    </Format>
  );
};

export default WikiBar;

/* FORMA SIN STYLED COMPONENT
const WikiBar = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
      <input
      onChange={e=>{
        setPageNumber(1);
        setSearch(e.target.value)
      }} 
      placeholder="Search for Characters" 
      type="text" className={s.input} />
      <button 
      onClick={e=>{e.preventDefault();
      }} 
      className="btn btn-primary fs-5">Search</button>
    </form>
  )
}

export default WikiBar */
