import React from "react";

function FormComponent() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Product name" />
        <input type="text" placeholder="Product description" />
      </form>
      <button>Add product</button>
    </div>
  );
}

function logger() {
  console.log("hi");
}

export default FormComponent;
export { logger };
