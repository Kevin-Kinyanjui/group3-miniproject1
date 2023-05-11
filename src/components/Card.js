import React from "react";

const url =
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

function CardComponent({ title, description }) {
  return (
    <div className="card">
      <img src={url} alt="Product" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default CardComponent;
