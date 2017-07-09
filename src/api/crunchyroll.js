//Packages
const axios = require("axios");
const cheerio = require("cheerio");
require("babel-register");

//Base URL used for requests
const BASE_URL = "http://crunchyroll.com";

const Crunchyroll = {
  async getAllSeries() {
    const { data } = await axios.get(BASE_URL);
    console.log(data);
  },
  getEpisodes(series) {},
  getEpisode(episode) {},
  getMySeries() {},
  search(query) {}
};

Crunchyroll.getAllSeries();

module.exports = Crunchyroll;
