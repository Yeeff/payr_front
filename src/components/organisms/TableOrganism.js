import React from 'react';
import TableHeaderAtom from '../atoms/TableHeaderAtom';
import TableBodyMolecule from '../molecules/TableBodyMolecule';

const TableOrganism = ({ headers, data, titleTable }) => {
  return (
    <div className="table-responsive">
      <h2>{titleTable}</h2>
      <table className="table table-striped table-bordered">
        <TableHeaderAtom headers={headers} />
        <TableBodyMolecule
          data={data}
          headingOrderGuide={[
            ["id", "Id"],
            ["name", "Name"],
            ["totalNightHolidaySurchargeHours", "HRND"],
            ["totalHolidayOvertimeHours","2"],
            ["totalNightSurchargeHoursv","3"],
            ["totalNightOvertimeHours","4"],
            ["totalNightHolidayOvertimeHours","5"],
            ["totalDayOvertimeHours","6"],
            ["totalHolidaySurchargeHours","7"],
            ["totalHolidayOvertimeSurchargeHours","8"],
            ["totalNightHolidayOvertimeSurchargeHours","9"]
          ]} />
      </table>
    </div>
  );
}

export default TableOrganism;
