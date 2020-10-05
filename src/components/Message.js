import React from "react";
import UseFetchData from "./UseFetchData";
import logo from "../img/logo192.png";

const Message = () => {
  const {
    loading,
    data,
    gifSrc,
    gifUrl,
    handleFetchGif,
    handleFetchData,
  } = UseFetchData();

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
