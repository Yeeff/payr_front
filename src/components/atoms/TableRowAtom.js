import React from "react";
import IconSeeEmployeePersonDetails from "./IconSeeEmployeePersonDetails";

const TableRowAtom = ({ rowData, headingOrderGuide, iconActionsList }) => {
  return (
    <tr>
      {Object.entries(headingOrderGuide).map(([key, label], index) => (
        <td key={index} className="text-center p-2">
          {key === "actions" ? (
            <IconSeeEmployeePersonDetails sendOnClick={rowData} />
          ) : (
            rowData[key] || "-"
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableRowAtom;
