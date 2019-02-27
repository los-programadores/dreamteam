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

  saveVoyage: function (voyageData) {
    return axios.post(`/api/voyages`, voyageData)
  },

  getVoyages: function (id) {
    return axios.get(`/api/voyages/${id}`);
  },

  // Gets all guides
  getGuide: function (location) {
    return axios.get(`/api/guides/${location}`);
  },

  // Saves a guide to the database
  saveGuide: function (userData) {
    return axios.post("/api/guides", userData);
  }
};
