import React from 'react';
import TableRowAtom from '../atoms/TableRowAtom';

const TableBodyMolecule = ({ data, headingOrderGuide }) => {

  return (
    <tbody>
      {data.map((row, index) => (
        <TableRowAtom key={index} rowData={row} headingOrderGuide={headingOrderGuide} />
      ))}
    </tbody>
  );
}

export default TableBodyMolecule;
