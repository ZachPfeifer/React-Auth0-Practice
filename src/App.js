import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Profile from "./views/Profile";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";

import { GlobalProvider } from "./context/GlobalState";
import UserProvider from './context/UserState';

import NavContainer from './components/Nav/NavContainer';


// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <UserProvider>
    <GlobalProvider>
    <Router history={history}>
      <div className="container-fluid">
        <NavBar />
        <NavContainer />

          <Switch>
            <Route path="/React-Expense-Tracker/" exact component={Home} />
            <PrivateRoute path="/React-Expense-Tracker/profile" component={Profile} />
          </Switch>
      </div>
    </Router>
    </GlobalProvider>
    </UserProvider>
  );
};

export default App;
