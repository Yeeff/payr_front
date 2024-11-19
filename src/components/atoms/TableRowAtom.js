import React from 'react';

const TableRowAtom = ({ rowData, headingOrderGuide }) => {


  return (
    <>
      <tr>
        {
          headingOrderGuide.map(([value, alias]) => {
            return (
              <td>{Object.entries(rowData)
                .filter(([key]) => key === value)
                .map(([, value]) => value)}</td>
            )
          })

        }
      </tr>
    </>
  );
};

export default TableRowAtom;
