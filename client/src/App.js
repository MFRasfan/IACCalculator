import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PriceDetail from "./components/PriceDetail";
import UpdatePriceList from "./components/UpdatePriceList";
import Calculator from "./components/Calculator";
import AllProducts from "./components/AllProducts";
import { Container } from "reactstrap";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
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
            <Route exact path="/price" component={UpdatePriceList} />  
            <Route exact path="/allproducts" component={AllProducts} />  
            <Route exact path="/price/:id" component={PriceDetail} />
            <Route exact path="/calculator" component={Calculator} />

          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
