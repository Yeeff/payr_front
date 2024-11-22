import React from 'react';

const TableHeaderAtom = ({ headers }) => (
  <thead className="thead-dark">
    <tr>
      {Object.entries(headers).map(([,headerName], index) => (
        <th key={index} >{headerName}</th>
      ))}
    </tr>
  </thead>
);

export default TableHeaderAtom;
