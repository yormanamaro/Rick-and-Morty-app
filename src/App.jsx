import { useState, useEffect, useCallback, useMemo } from "react";
import WikiBar from "./components/WikiBar/WikiBar";
import FilterPerson from "./components/FilterPerson/FilterPerson";
import CarPerson from "./components/CarPerson/CarPerson";
import PaginacionWiki from "./components/PaginacionWiki/PaginacionWiki";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./index.css";

function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setEspecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData; // aqui estoy destructurando los argumentos que voy a necesitar de fechData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  /*
  const data = useMemo(async () => {
    return await fetch(api).then(res=>res.json());
  }, [api]);
 
  useEffect(() => {
    updateFetchedData(data);
  }, [data]); */

  return (
    <div className="App">
      <h1 className="text-center my-5">
        Rick and Morty <span className="text-primary">Wiki</span>
      </h1>

      <WikiBar setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <FilterPerson
            setEspecies={setEspecies}
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <CarPerson results={results} />
            </div>
          </div>
        </div>
      </div>

      <PaginacionWiki
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
