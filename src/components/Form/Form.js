import Input from "./Input";
import React from "react";

function Form(){
    return(
<div>
      <label>First Name:</label>
      <Input />

      <label>Last Name:</label>
      <Input />

      <label>Email:</label>
      <Input />

      <label>Phone:</label>
      <Input />

      <label>Address:</label>
      <Input />

      <label>Job Title:</label>
      <Input />

      <label>Link:</label>
      <input type="file" id="myfile" name="myfile" />

  </div>
  );
  }
export default Form;