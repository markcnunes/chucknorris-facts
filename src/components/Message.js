import React, { useEffect, useState } from "react";
import { fetchData } from "../httpRequest/fetchData";

const Message = () => {
  const [loading, setLoading] = useState(true);
  const [icon, setIcon] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData()
      .then((res) => {
        const { icon_url } = res.data;
        const { value } = res.data;

        setIcon(icon_url);
        setData(value);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    fetchData()
      .then((res) => {
        const { value } = res.data;

        setData(value);
      })
      .catch((err) => console.log(err));
  };

  return loading ? (
    <div>...loading</div>
  ) : (
    <div>
      <img src={icon} className="chucknorris-icon" alt="icon" />
      <h2>{data}</h2>
      <button onClick={handleClick}>More</button>
    </div>
  );
};

export default Message;
