import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon,
} from "react-share";
import { toast } from "react-toastify";

const ShareButton = (props) => {
  const shareUrl = window.location.href;
  const title = props.title;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(title + " :: " + shareUrl);
    toast("✔️ Copied to Clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="share-buttons">
      <FacebookShareButton
        url={shareUrl}
        title={title}
        className="share-buttons__item"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={shareUrl}
        title={title}
        className="share-buttons__item"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton
        url={shareUrl}
        title={title}
        className="share-buttons__item"
      >
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton
        url={shareUrl}
        title={title}
        windowWidth={660}
        windowHeight={460}
        className="share-buttons__item"
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=":: "
        className="share-buttons__item"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <EmailShareButton
        url={shareUrl}
        subject={title}
        body="body"
        className="share-buttons__item"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
      <button
        className="button button--icon share-buttons__item"
        onClick={copyToClipboard}
        title="Copy link to clipboard"
      >
        <svg
          className="share-buttons__icon"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
      </button>
    </div>
  );
};

export default ShareButton;
