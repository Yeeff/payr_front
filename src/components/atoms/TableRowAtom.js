import React from 'react';

const TableRowAtom = ({ rowData }) => {

  return (
    <>
      <tr key={rowData[0]}>
        {rowData.map((value) => (
          <td>{value}</td>
        ))}
      </tr>
    </>
  );
};

export default TableRowAtom;
