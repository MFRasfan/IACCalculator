import React, { Component } from "react";
import DeleteBtn from "./DeleteBtn";
import Jumbotron from "./Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "./Grid";
import { List, ListItem } from "./List";
import { Input,FormBtn } from "./Form";
// import { Container, Row, Col } from "reactstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";


class Price extends Component {
  
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
          <Col size="md-6">
            <Jumbotron>
              <h1>Add New Product</h1>
            </Jumbotron>
            <form>
            <Input
                value={this.state.Category}
                onChange={this.handleInputChange}
                name="Category"
                placeholder="Category (Required)"
              />
              <Input
                value={this.state.Material}
                onChange={this.handleInputChange}
                name="Material"
                placeholder="Material (Required)"
              />
              <Input
                value={this.state.Sqft1}
                onChange={this.handleInputChange}
                name="Sqft1"
                placeholder="Sqft 0-3.99 (Required)"
              />
              <Input
                value={this.state.Sqft2}
                onChange={this.handleInputChange}
                name="Sqft2"
                placeholder="Sqft 4-9.99 (Required)"
              />
              <Input
                value={this.state.Sqft3}
                onChange={this.handleInputChange}
                name="Sqft3"
                placeholder="Sqft 10-19.99 (Required)"
              />
              <Input
                value={this.state.Sqft4}
                onChange={this.handleInputChange}
                name="Sqft4"
                placeholder="Sqft 20-39.99 (Required)"
              />
              <Input
                value={this.state.Sqft5}
                onChange={this.handleInputChange}
                name="Sqft5"
                placeholder="Sqft 40-99.99 (Required)"
              />
              <Input
                value={this.state.Sqft6}
                onChange={this.handleInputChange}
                name="Sqft6"
                placeholder="Sqft 100-199.99 (Required)"
              />
              <Input
                value={this.state.Sqft7}
                onChange={this.handleInputChange}
                name="Sqft7"
                placeholder="Sqft 200-999.99 (Required)"
              />
              <Input
                value={this.state.Sqft8}
                onChange={this.handleInputChange}
                name="Sqft8"
                placeholder="Sqft 1000-2999.99 (Required)"
              />
              <Input
                value={this.state.Sqft9}
                onChange={this.handleInputChange}
                name="Sqft9"
                placeholder="Sqft 3000-4999.99 (Required)"
              />
               <Input
                value={this.state.Sqft10}
                onChange={this.handleInputChange}
                name="Sqft10"
                placeholder="Sqft 5000+ (Required)"
              />
              <Input
                value={this.state.Finishing1}
                onChange={this.handleInputChange}
                name="Finishing1"
                placeholder="Finishing Linear Feet 0-9.99  (Required)"
              />
              <Input
                value={this.state.Finishing2}
                onChange={this.handleInputChange}
                name="Finishing2"
                placeholder="Finishing Linear Feet 10-199.99  (Required)"
              />
              <Input
                value={this.state.Finishing3}
                onChange={this.handleInputChange}
                name="Finishing3"
                placeholder="Finishing Linear Feet 200+  (Required)"
              />
              <FormBtn
                disabled={!(this.state.Category && this.state.Material)}
                onClick={this.handleFormSubmit}
              >
                Add Product
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Products Added</h1>
            </Jumbotron>
            {this.state.price.length ? (
              <List>
                {this.state.price.map(prices => (
                  <ListItem key={prices._id}>
                    <Link to={"/price/" + prices._id}>
                      <strong>
                        {prices.Category} {prices.Material}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deletePrice(prices._id)} /> */}
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


export default Price