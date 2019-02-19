import axios from "axios";

export default {
  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },

  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  // Gets all guides
  getGuides: function () {
    return axios.get("/api/guides");
  },

  // Saves a guide to the database
  saveGuide: function (userData) {
    return axios.post("/api/guides", userData);
  }
};
