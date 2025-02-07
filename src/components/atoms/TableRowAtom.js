import React from 'react';
import IconSeeEmployeePersonDetails from './IconSeeEmployeePersonDetails';

const TableRowAtom = ({ rowData, headingOrderGuide, iconActionsList }) => {

  return (
    <>
      <tr>

        {
          Object.entries(headingOrderGuide).map(([value,], index) => {

            if(value=="actions") return (<td>  <IconSeeEmployeePersonDetails sendOnClick={rowData}></IconSeeEmployeePersonDetails> </td>);

            return (
              <>
                <td key={index}>
                  {Object.entries(rowData)
                    .filter(([key]) => key === value)
                    .map(([, value]) => value)}
                </td>
              </>
            )
          })
        }



      </tr>
    </>
  );
};

export default TableRowAtom;
