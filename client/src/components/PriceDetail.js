import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import { Table } from 'react-bootstrap';

import Jumbotron from "./Jumbotron";
import API from "../utils/API";


class PriceDetail extends Component {
  state = {
    prices: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getPrices(this.props.match.params.id)
      .then(res => this.setState({ prices: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.prices.Category} / {this.state.prices.Material}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
        <Table striped bordered hover size="md">
  <thead>
    <tr>
      <th>Sqft 0-3.99</th>
      <th>Sqft 4-9.99</th>
      <th>Sqft 10-19.99</th>
      <th>Sqft 20-39.99</th>
      <th>Sqft 40-99.99</th>
      <th>Sqft 100-199.99</th>
      <th>Sqft 200-999.99</th>
      <th>Sqft 1000-2999.99</th>
      <th>Sqft 3000-4999.99</th>
      <th>Sqft 5000+</th>
      <th>Linear 0-9.99</th>
      <th>Linear 10-199.99</th>
      <th>Linear 200+</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${this.state.prices.Sqft1}</td>
      <td>${this.state.prices.Sqft2}</td>
      <td>${this.state.prices.Sqft3}</td>
      <td>${this.state.prices.Sqft4}</td>
      <td>${this.state.prices.Sqft5}</td>
      <td>${this.state.prices.Sqft6}</td>
      <td>${this.state.prices.Sqft7}</td>
      <td>${this.state.prices.Sqft8}</td>
      <td>${this.state.prices.Sqft9}</td>
      <td>${this.state.prices.Sqft10}</td>
      <td>${this.state.prices.Finishing1}</td>
      <td>${this.state.prices.Finishing2}</td>
      <td>${this.state.prices.Finishing3}</td>

    </tr>
  
  </tbody>
</Table>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PriceDetail;
