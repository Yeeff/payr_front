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
              
              totalOvertimeHoursDay: "HXD",
              totalOvertimeHoursHoliday: "HXF",
              totalOvertimeHoursNight: "HXN",
              totalOvertimeHoursNightHoliday: "HXFN",

              totalSurchargeHoursHoliday: "HRF",
              totalSurchargeHoursNight: "HRN",
              totalSurchargeHoursNightHoliday: "HRNF",

              totalOvertimeSurchargeHoursHoliday: "HXRF",
              totalOvertimeSurchargeHoursNightHoliday: "HXRFN",
            }}
            data={data}
            titleTable={"Datos procesados"}
          ></TableOrganism>
        </div>}
    </div>
  );
}

export default ProcessedData;
