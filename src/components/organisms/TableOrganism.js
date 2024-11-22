import React from 'react';
import TableHeaderAtom from '../atoms/TableHeaderAtom';
import TableBodyMolecule from '../molecules/TableBodyMolecule';

const TableOrganism = ({ headingOrderGuide, data, titleTable }) => {
  return (
    <div className="table-responsive">
      <h2>{titleTable}</h2>
      <table className="table table-striped table-bordered">
        <TableHeaderAtom
          headers={headingOrderGuide} />
        <TableBodyMolecule
          data={data}
          headingOrderGuide={headingOrderGuide} />
      </table>
    </div>
  );
}

export default TableOrganism;
