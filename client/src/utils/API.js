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

  getGuideVoyages: function (id) {
    return axios.get(`/api/voyages/guides/${id}`);
  },

  // Gets all guides
  getGuides: function (location) {
    return axios.get(`/api/guides/getguides/${location}`);
  },

  getGuide: function (id) {
    return axios.get(`/api/guides/${id}`);
  },

  // Saves a guide to the database
  saveGuide: function (userData) {
    return axios.post("/api/guides", userData);
  },
  getVoyage: function (voyageID) {
    return axios.get(`/api/voyages/chat/${voyageID}`)
  },

  postVoyageChat: function (voyageID, chatData) {
    return axios.post(`/api/voyages/chat/${voyageID}`, chatData)
  }
};
