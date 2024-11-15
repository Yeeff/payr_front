import React from 'react';

const SelectField = ({ id, options, onChange }) => (

  <select id={id} onChange={onChange}>

    <option value="">Select</option>

    {options.map((option, index) => (
      <option key={index} value={index}>
        {option}
      </option>
    ))}

  </select>
);

export default SelectField;
