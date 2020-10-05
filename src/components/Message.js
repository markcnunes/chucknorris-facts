import React from "react";
import ShareButton from "./ShareButton";
import UseFetchData from "./UseFetchData";

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
      {loading ? (
        <div>...loading</div>
      ) : (
        <div className="message__wrapper">
          <h2>Did you know?</h2>
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
            <h1>{data}</h1>
            <div className="message__share">
              <h3>Share it</h3>
              <ShareButton title={`Did you know? ${data}`} />
            </div>
            <button className="button button--primary" onClick={handleClick}>
              Show Another Fact
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
