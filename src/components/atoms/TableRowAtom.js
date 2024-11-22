import React from 'react';

const TableRowAtom = ({ rowData, headingOrderGuide }) => {

  return (
    <>
      <tr>
        {
          Object.entries(headingOrderGuide).map(([value, ], index) => {
            return (
              <td key={index}>{Object.entries(rowData)
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
