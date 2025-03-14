import React from "react";
import {  Form } from "react-bootstrap";

const InputFieldFile = ({ id, onChange, multiple = false }) => {
  return (
    <div className="mb-3">
      <Form.Group>
        
        <label htmlFor={id} className="form-label">
          Selecciona un archivo (.xlsx, .xls)
        </label>
        <input
          id={id}
          type="file"
          className="form-control"
          accept=".xlsx, .xls"
          onChange={onChange}
          multiple={multiple}
        />
      </Form.Group>

    </div>
  );
};

export default InputFieldFile;

