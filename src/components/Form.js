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

export default FormComponent;
