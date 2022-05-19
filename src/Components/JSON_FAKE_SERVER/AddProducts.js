import axios from "axios";
import React from "react";
import {connect} from  'react-redux';
const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
class AddProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      location: "",
    };
    this.changeId = this.changeId.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.changeLocation = this.changeLocation.bind(this);

    this.AddProducts = this.AddProducts.bind(this);
  }
  changeId(e) {
    if (rx_live.test(e.target.value)){
    this.setState({ id:e.target.value });
  }}
  changeName(e) {
    this.setState({ name: e.target.value });
  }
  changePrice(e) {
    this.setState({ price: e.target.value });
  }
  changeLocation(e) {
    this.setState({ location: e.target.value });
  }
  AddProducts(e) {
    //   e.preventDefault(e)
    let Data = {
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      location: this.state.location,
    };
    axios
      .post("http://localhost:3000/comments", Data)
      .then((response) => {
        console.log(response.status);
        if(response.data === 2000){
          this.props.dispatch({
            type : "FETCH_PRODUCT",
            comments :response.data
          })
        }
        this.ref.addProductForm.reset();
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <>
        <section className="m-2 p-2">
          <form onSubmit={this.AddProducts} ref="">
            <div className="form-group">
              <label>Enter the id </label> <br />
              <input
                type="number"
                name="id"
                maxLength={4}
                pattern="[+-]?\d+(?:[.,]\d+)?"
                onChange={this.changeId}
                value={this.state.id}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Enter the name </label>
              <input
                type="text"
                name="id"
                onChange={this.changeName}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Enter the price </label>
              <input
                type="number"
                name="id"
                onChange={this.changePrice}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Enter the location </label>
              <input
                type="text"
                name="id"
                onChange={this.changeLocation}
                className="form-control"
              />
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="submit"
                onSubmit={this.AddProducts}
                className="btn btn-warning"
              />
            </div>
          </form>
        </section>
      </>
    );
  }
}

export default connect() (AddProducts);
