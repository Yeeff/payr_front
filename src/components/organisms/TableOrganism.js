import React from 'react';
import TableHeaderAtom from '../atoms/TableHeaderAtom';
import TableBodyMolecule from '../molecules/TableBodyMolecule';

const TableOrganism = ({ headers, data, titleTable }) => {
  return(
    <div className="table-responsive">
      <h2>{titleTable}</h2>
      <table className="table table-striped table-bordered">
        <TableHeaderAtom headers={headers} />
        <TableBodyMolecule data={data} />
      </table>
    </div>
  );
}

export default TableOrganism;
