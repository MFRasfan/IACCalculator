import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
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
                {this.state.prices.Category}  {this.state.prices.Material}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Price</h1>
              <p>
                {this.state.prices.Finishing2}
              </p>
            </article>
          </Col>
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
