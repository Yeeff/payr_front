import React from 'react';

const InputFieldFile = ({ id, type, onChange }) => (
  <input id={id} type={type} accept=".xlsx, .xls" onChange={onChange} />
);

export default InputFieldFile;
