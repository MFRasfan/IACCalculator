import React from "react";
import API from "../utils/API";


class Calculator extends React.Component {

   
    state = {
    price: [],
      Width: 0,
      Height: 0,
      Quantity: 0,
      Material: "",
    }

    componentDidMount() {
        this.loadPrice();
      }

      loadPrice = () => {
        API.getPrice()
          .then(res =>
            this.setState({ price: res.data,   
        
        Material: "",
        })
          )
          .catch(err => console.log(err));
      };


    render() {

        let optionItems = this.state.price.map(prices =>
                <option key={prices.Material}>{prices.Material}</option>
            );
  
      return (

        <div className="container">
        <form className="container">
          <table className="table table-bordered">
            <tbody>
            <tr>
              <td>Material</td>
              <td>
            <select name="Width" id="Width"className="form-control">
                {optionItems}
             </select>
              
              </td>
            </tr>
            <tr>
              <td>Finishing</td>
              <td>
            <select name="Width" id="Width"className="form-control">
                <option selected value="no">No</option>
                <option value="hem">Hem</option>
                <option value="seg">Seg</option>
                <option value="velcro">Velcro</option>
                <option value="webbing">Webbing</option>
             </select>
              
              </td>
            </tr>
            <tr>
              <td>Width</td>
              <td>
              <input type="number"className="form-control" type="number" value={this.state.Width} onChange={this.alpha} name="Width" id="Width"/>
              </td>
            </tr>
            <tr>
              <td>Height</td>
              <td>
              <input type="number"className="form-control" type="number" value={this.state.Height} onChange={this.alpha} name="Height" id="Height"/>

              </td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>
              <input type="number"className="form-control" type="number" value={this.state.Quantity} onChange={this.alpha} name="Quantity" id="Quantity"/>
              </td>
            </tr>
            <tr>
              <td>Total SQFT</td>
              <td>
              <span type="number" name="total" id="total" className="form-control"  >{this.state.Width * this.state.Height * this.state.Quantity /144} </span>
              </td>
            </tr>
            </tbody>
          </table>
          <div className="col-xs-12">
            <input
              type="submit"
              className="btn btn-block btn-primary"
              value="Get Price"/>
          </div>
        </form>
      </div>
        
     )
    }
     alpha = (ev) => {
      this.setState({
              [ev.target.name]: ev.target.value
      });
     }
  
  }

  export default Calculator



