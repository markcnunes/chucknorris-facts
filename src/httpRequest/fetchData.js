import axios from "axios";

export const API = "https://api.chucknorris.io/jokes/random";

export const fetchData = async () => {
  return await axios.get(API);
  /* .then((res) => {
      const { icon_url } = res.data;
      const { value } = res.data;

      return { icon_url, value };
    })
    .catch((err) => {
      console.log(err);
    }); */
};
