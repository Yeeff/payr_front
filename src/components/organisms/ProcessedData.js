import React from "react";
import TableOrganism from "./TableOrganism";
import { useProcessedDataContext } from "../../context/ProcessedDataContext";
import { Container, Card, Spinner } from "react-bootstrap";
import useActionIconList from "../../hooks/useActionIconList";

function ProcessedData({ data, show, handleDownload, handleSiigoFormat, fileNameId, onSeeEmployeeDetails }) {
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

  if (!show) return null;

  return (
    <Container className="mt-4">
      <Card className="shadow-lg p-3">
        <Card.Title className="text-center fs-4 fw-bold">Datos procesados</Card.Title>

        {loding ? (
          <div className="d-flex justify-content-center my-3">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <TableOrganism
            headingOrderGuide={headingOrderGuide}
            data={data}
            handleDownload={handleDownload}
            handleSiigoFormat={handleSiigoFormat}
            fileNameId={fileNameId}
            iconActionsList={iconActionsList}
          />
        )}
      </Card>
    </Container>
  );
}

export default ProcessedData;
