import React, { Fragment } from "react";
import Header from '../components/Charts/Header'
import Charts from '../components/Charts/Charts'
import TransactionsContainer from "../components/Transactions/TransactionsContainer";

const Home = () => (
  <Fragment>
    <div className="wrapper">
        <div className="row">
          <div id="transactions" className="mx-auto">
            <Header />
            <TransactionsContainer/>
          </div>
          <div id="charts" className="mx-auto "  >
            <Charts />
          </div>
        </div>
      </div>
  </Fragment>
);

export default Home;
