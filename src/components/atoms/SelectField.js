import React from "react";

const SelectField = ({ id, options, onChange, defaultValue = "" }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        Selecciona una opción
      </label>
      <select id={id} className="form-select" onChange={onChange} value={defaultValue}>
        <option value="" disabled>Seleccionar...</option>
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;

