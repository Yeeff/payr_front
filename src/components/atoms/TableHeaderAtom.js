import React from 'react';

const TableHeaderAtom = ({ headers }) => (
  <thead className="thead-dark">
    <tr>
      {headers.map((header, index) => (
        <th key={index}>{header}</th>
      ))}
    </tr>
  </thead>
);

export default TableHeaderAtom;
