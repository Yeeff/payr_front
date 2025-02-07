import React from 'react';
import TableRowAtom from '../atoms/TableRowAtom';

const TableBodyMolecule = ({ data, headingOrderGuide, iconActionsList }) => {

  return (
    <tbody>
      {data.map((row, index) => (
        <TableRowAtom key={index} rowData={row} headingOrderGuide={headingOrderGuide} iconActionsList={iconActionsList} />
      ))}
    </tbody>
  );
}

export default TableBodyMolecule;
