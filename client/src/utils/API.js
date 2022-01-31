import axios from "axios";

export default {
    // Gets all price
  getPrice: function() {
    return axios.get("/api/price");
  },
  // Gets the price with the given id
  getPrices: function(id) {
    return axios.get("/api/price/" + id);
  },
  // Deletes the price with the given id
  deletePrice: function(id) {
    return axios.delete("/api/price/" + id);
  },
  // Saves a price to the database
  savePrice: function(priceData) {
    return axios.post("/api/price", priceData);
  }
};
