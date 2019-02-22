import axios from "axios";

export default {
  // Gets all users
  getUser: function (id) {
    return axios.get(`/api/users/${id}`);
  },

  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  saveVoyage: function (id, voyageData) {
    return axios.post(`/api/users/${id}`, voyageData)
  },

  // Gets all guides
  getGuide: function (id) {
    return axios.get(`/api/guides/${id}`);
  },

  // Saves a guide to the database
  saveGuide: function (userData) {
    return axios.post("/api/guides", userData);
  }
};
