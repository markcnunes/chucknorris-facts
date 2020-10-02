import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__item footer__item--author">
        Made by&nbsp;
        <a
          href="https://markclausnunes.com"
          title="Mark's website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mark Claus Nunes
        </a>
        <a
          href="https://twitter.com/MarkClaus"
          title="Mark's website"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="footer__icon footer__icon--twitter"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>
      </div>
      <div className="footer__item footer__item--technology">
        Thanks to the APIs:
        <a
          href="https://api.chucknorris.io/"
          title="Mark's website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chucknorris.io
        </a>
        and
        <a
          href="https://developers.giphy.com/"
          title="Mark's website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Giphy
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;