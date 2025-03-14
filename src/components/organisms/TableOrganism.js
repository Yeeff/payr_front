import React from "react";
import TableHeaderAtom from "../atoms/TableHeaderAtom";
import TableBodyMolecule from "../molecules/TableBodyMolecule";
import { Card, Table, Button } from "react-bootstrap";

const TableOrganism = ({ headingOrderGuide, data, titleTable, handleDownload, handleSiigoFormat, fileNameId, iconActionsList }) => {
  if (iconActionsList) headingOrderGuide.actions = "Acciones";

  return (
    <div >
      <div className="d-flex justify-content-start mb-2">
        {handleDownload && (
          <Button variant="success" size="sm" onClick={() => handleDownload(fileNameId)}>
            Descargar
          </Button>
        )}
      </div>

      <div className="table-responsive">
        <Table striped bordered hover>
          <TableHeaderAtom headers={headingOrderGuide} />
          <TableBodyMolecule data={data} headingOrderGuide={headingOrderGuide} iconActionsList={iconActionsList} />
        </Table>
      </div>
    </div>
  );
};

export default TableOrganism;
