import client from "./client";

const endpoint = "search?q=?q=";
// const testpoint = "search?q=impractical%20jokers";

const getShows = () => client.get(endpoint);

export default {
  getShows,
};
