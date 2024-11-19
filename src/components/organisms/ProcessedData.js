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
            headers={['Id','Name'] }
            data={data}
            titleTable={"Processed Data:" }
          ></TableOrganism>
        </div>}
    </div>
  );
}

export default ProcessedData;
