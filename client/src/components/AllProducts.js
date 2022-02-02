import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import Jumbotron from "./Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import { List, ListItem } from "./List";
import { Table } from 'react-bootstrap';
// import { Container, Row, Col } from "reactstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";


class AllProducts extends Component {
  
  state = {
    price: [],
    Category: "",
    Material: "",
    Sqft1: "",
    Sqft2: "",
    Sqft3: "",
    Sqft4: "",
    Sqft5: "",
    Sqft6: "",
    Sqft7: "",
    Sqft8: "",
    Sqft9: "",
    Sqft10: "",
    Finishing1: "",
    Finishing2: "",
    Finishing3: ""
  };

  componentDidMount() {
    this.loadPrice();
  }

  loadPrice = () => {
    API.getPrice()
      .then(res =>
        this.setState({ price: res.data,   
    Category: "",
    Material: "",
    Sqft1: "",
    Sqft2: "",
    Sqft3: "",
    Sqft4: "",
    Sqft5: "",
    Sqft6: "",
    Sqft7: "",
    Sqft8: "",
    Sqft9: "",
    Sqft10: "",
    Finishing1: "",
    Finishing2: "",
    Finishing3: ""})
      )
      .catch(err => console.log(err));
  };

  deletePrice = id => {
    API.deletePrice(id)
      .then(res => this.loadPrice())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.Category && this.state.Material) {
      API.savePrice({
        Category: this.state.Category,
        Material: this.state.Material,
        Sqft1: this.state.Sqft1,
        Sqft2: this.state.Sqft2,
        Sqft3: this.state.Sqft3,
        Sqft4: this.state.Sqft4,
        Sqft5: this.state.Sqft5,
        Sqft6: this.state.Sqft6,
        Sqft7: this.state.Sqft7,
        Sqft8: this.state.Sqft8,
        Sqft9: this.state.Sqft9,
        Sqft10: this.state.Sqft10,
        Finishing1: this.state.Finishing1,
        Finishing2: this.state.Finishing2,
        Finishing3: this.state.Finishing3


      })
        .then(res => this.loadPrice())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>All Products</h1>
            </Jumbotron>
            {this.state.price.length ? (
              <List>
                {this.state.price.map(prices => (
                  <ListItem key={prices._id}>
                    <Link to={"/price/" + prices._id}>
                    <Table striped bordered hover size="md">
  <thead>
    <tr>
      <th>{prices.Category}</th>
      <th>{prices.Material}</th>
      
    </tr>
  </thead>
  
</Table>
                      
                    </Link>
                    <DeleteBtn onClick={() => this.deletePrice(prices._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}


export default AllProducts