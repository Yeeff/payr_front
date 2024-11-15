import React from 'react';
import TableRowAtom from '../atoms/TableRowAtom';

const TableBodyMolecule = ({ data }) => {

  return (
    <tbody>
      {Object.entries(data).map((row, index) => (
        <TableRowAtom key={index} rowData={row} />
      ))}
    </tbody>
  );
}

export default TableBodyMolecule;
