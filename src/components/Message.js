import React, { useEffect, useState } from "react";
import { fetchData } from "../httpRequest/fetchData";
import { fetchGif } from "../httpRequest/fetchGif";
import logo from "../img/logo192.png";

const Message = () => {
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

  const handleClick = () => {
    handleFetchGif();
    handleFetchData();
  };

  return (
    <div className="message">
      <div className="container">
        {loading ? (
          <div>...loading</div>
        ) : (
          <div className="message__wrapper">
            <h1>Did you know?</h1>
            <a
              href={gifUrl}
              title="Giphy"
              target="_blank"
              rel="noopener noreferrer"
              className="message__gif"
            >
              <img src={gifSrc} alt="gif" />
            </a>
            <div className="message__box">
              <h2>{data}</h2>
              <button className="button button--primary" onClick={handleClick}>
                Show Another
                <img src={logo} className="chucknorris-icon" alt="icon" />
                Fact
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
