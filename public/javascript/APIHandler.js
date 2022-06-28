const axios = require('axios');

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister (characterObject) {
    return axios.post(`${this.BASE_URL}/characters`, characterObject);
  }

  updateOneRegister (id, characterObject) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, characterObject);
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}

module.exports = APIHandler;