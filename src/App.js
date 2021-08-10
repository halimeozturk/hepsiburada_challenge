import React from "react";
import "./App.css";
import "../src/styles/css/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../src/components/header.jsx";
import CreateList from "../src/pages/create-link.jsx"
import LinkTable from "./components/table-link.jsx"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={LinkTable} />
          <Route path="/create-list" component={CreateList} />
      </Switch>
    </Router>
  );
}

export default App;
