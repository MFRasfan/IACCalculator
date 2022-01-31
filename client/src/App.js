import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./components/Books";
import Detail from "./components/Detail";
import PriceDetail from "./components/PriceDetail";
import UpdatePriceList from "./components/UpdatePriceList";
import { Container } from "reactstrap";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/price" component={UpdatePriceList} />
           <Route exact path="/books/:id" component={Detail} />
           <Route exact path="/price/:id" component={PriceDetail} />
           
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
