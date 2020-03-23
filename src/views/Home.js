import React, { Fragment } from "react";
import Header from '../components/Charts/Header'
import Balance from '../components/Transactions/Balance'
import IncomeExpenses from '../components/Transactions/IncomeExpenses'
import TransactionList from '../components/Transactions/TransactionList'
import AddTransaction from '../components/Transactions/AddTransaction'
import Charts from '../components/Charts/Charts'

const Home = () => (
  <Fragment>
    <div className="wrapper">
        <div className="row">
          <div id="transactions" className="mx-auto">
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </div>
          <div id="charts" className="mx-auto "  >
            <Charts />
          </div>
        </div>
      </div>
  </Fragment>
);

export default Home;
