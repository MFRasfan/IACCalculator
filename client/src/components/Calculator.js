import React from "react";

class Calculator extends React.Component {
    state = {
      Width: 0,
      Height: 0,
      Quantity: 0,
    }
    render() {
  
      return (


        <div className="container">
        <form className="container">
          <table className="table table-bordered">
            <tbody>
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



