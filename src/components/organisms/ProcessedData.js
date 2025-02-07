import React from 'react';
import TableOrganism from './TableOrganism';
import { useProcessedDataContext } from '../../context/ProcessedDataContext';
import LoderSpinner from '../atoms/LoderSpinner';
import useActionIconList from '../../hooks/useActionIconList';

function ProcessedData({ data, show, handleDownload, handleSiigoFormat, fileNameId, onSeeEmployeeDetails}) {


  const { loding } = useProcessedDataContext();

  const headingOrderGuide = {
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
  };

  const iconActionsList = useActionIconList(onSeeEmployeeDetails);

  return (
    <div>
     
      {show &&
        <div className="mt-4">

          <LoderSpinner loding={loding}></LoderSpinner>

          <TableOrganism

            headingOrderGuide={headingOrderGuide}
            data={data}
            titleTable={"Datos procesados"}

            handleDownload={handleDownload}
            handleSiigoFormat={handleSiigoFormat}

            fileNameId={fileNameId}

            iconActionsList={iconActionsList}
          ></TableOrganism>
        </div>}
    </div>
  );
}

export default ProcessedData;
