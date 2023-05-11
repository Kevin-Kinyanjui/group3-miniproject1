import React from "react";

const url =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmU5zm0LFiri0c6sCIRC_qVh86PwruoGCzTT6pW6wYcqVCGvOju7a5HiB3F4YWCgnnps&usqp=CAU";

function CardComponent({ title, description }) {
  return (
    <div className="card">
      <img src={url} alt="Group3 working" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default CardComponent;
