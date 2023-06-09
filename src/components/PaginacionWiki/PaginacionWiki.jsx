import React from "react";
import { useState, useEffect, useCallback, useMemo } from "react";
import ReactPaginate from "react-paginate";
import s from "./style.module.css";

const PaginacionWiki = ({ info, pageNumber, setPageNumber }) => {
  let [width, setWidth] = useState(window.innerWidth);
  console.log(width);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>

      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-primary prev"
        nextClassName="btn btn-primary next"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName="active"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default PaginacionWiki;

/*
let next = () => {
  setPageNumber((x) => x + 1);
};

let prev = () => {
  if(pageNumber === 1) return
  setPageNumber((x) => x - 1);
};

return (
  <div className="container d-flex justify-content-center gap-5 my-5">
    <button onClick={prev} className="btn btn-primary">Prev</button>
    <button onClick={next} className="btn btn-primary">Next</button>
  </div>
)
*/
