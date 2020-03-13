import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize";

import SearchBar from "./components/layouts/Searchbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";

import "./App.css";

const App = () => {
  useEffect(() => {
    // Initializes materialize JS
    M.AutoInit();
  }, []);
  return (
    <Fragment className="App">
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
      <AddBtn />
    </Fragment>
  );
};

export default App;
