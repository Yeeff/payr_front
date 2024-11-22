import React from 'react';
import TableOrganism from './TableOrganism';

function ProcessedData({ data, show }) {

  //if (show) {
  //  data = data.map(({ surcharges, overtimes, overtimeSurcharges, ...rest }) => Object.values(rest));
  //}

  return (
    <div>
      {show &&
        <div className="mt-4">
          <TableOrganism
            headingOrderGuide={{
              id: "Cedula",
              name: "Nombre",
              
              totalDayOvertimeHours: "HED",
              totalHolidayOvertimeHours: "HEF",
              totalNightOvertimeHours: "HEN",
              totalNightHolidayOvertimeHours: "HEFN",

              totalHolidaySurchargeHours: "HRF",
              totalNightSurchargeHours: "HRN",
              totalNightHolidaySurchargeHours: "HRNF",

              totalHolidayOvertimeSurchargeHours: "HERF",
              totalNightHolidayOvertimeSurchargeHours: "HERFN",
            }}
            data={data}
            titleTable={"Datos procesados"}
          ></TableOrganism>
        </div>}
    </div>
  );
}

export default ProcessedData;
