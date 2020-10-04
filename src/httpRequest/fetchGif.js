import axios from "axios";

export const fetchGif = async () => {
  const offset = Math.floor(Math.random() * 60);
  const API = `https://api.giphy.com/v1/gifs/search?q=chuck+norris&api_key=${process.env.REACT_APP_GIPHY}&offset=${offset}&limit=1`;

  return await axios.get(API);
};
