import { useEffect, useState } from "react";
import { fetchData } from "../httpRequest/fetchData";
import { fetchGif } from "../httpRequest/fetchGif";

const UseFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [gifSrc, setGifSrc] = useState("");
  const [gifUrl, setGifUrl] = useState("");

  const handleFetchGif = () => {
    fetchGif().then((res) => {
      const src = res.data.data[0].images.fixed_height.url;
      const { url } = res.data.data[0];
      setGifSrc(src);
      setGifUrl(url);
    });
  };

  const handleFetchData = (firstLoad = false) => {
    fetchData()
      .then((res) => {
        const { value } = res.data;

        setData(value);

        if (firstLoad) {
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleFetchGif();
    handleFetchData(true);
  }, []);

  return { loading, data, gifSrc, gifUrl, handleFetchGif, handleFetchData };
};

export default UseFetchData;
