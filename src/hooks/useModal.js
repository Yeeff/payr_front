import { useState } from "react";
import ModalOrganisms from "../components/organisms/ModalOrganisms";
import TableOrganism from "../components/organisms/TableOrganism";

import ContentTypeModal from "../utils/Constanst";

function useModal(showType, handleClose, fileErrors, data) {

    if (!showType) return null;

    return (
        <ModalOrganisms
            showModal={showType ? true : false}
            handleClose={handleClose}>
            {
                showType == ContentTypeModal.ERROR_FILE_LIST &&
                <TableOrganism
                    data={fileErrors}
                    headingOrderGuide={{
                        cell: "Celda",
                        description: "Descripcion"
                    }}
                ></TableOrganism>

            }
            {
                showType == ContentTypeModal.EMPLOYEE_PAYROLL_DETAILS &&

                <div className="container mt-4">
                    <h2>Employee Details</h2>
                    <p>
                        <strong>ID:</strong> {data.id}
                    </p>
                    <p>
                        <strong>Name:</strong> {data.name}
                    </p>

                    <div className="accordion" id="accordionExample">
                        {[
                            { title: "Recargos", data: data.surcharges },
                            { title: "Horas extras", data: data.overtimes },
                            { title: "Hora extras recargos", data: data.overtimeSurcharges },
                            { title: "Razon ausencia", data: data.absenteeismReasons },
                        ].map((item, idx) => (
                            <AccordionItem
                                key={idx}
                                title={item.title}
                                data={item.data}
                                index={idx}
                            />
                        ))}
                    </div>
                </div>

            }

        </ModalOrganisms>

    );
}
const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "/");
    const formattedTime = date.toTimeString().slice(0, 5);
    return `${formattedDate} ${formattedTime}`;
};

const AccordionItem = ({ title, data, index }) => {
    if (data.length === 0) return null;

    const displayTitle = `${title} (${data.reduce((total, item) => total + (item.quantityOfMinutes /60  || 0), 0)})`;

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`heading-${index}`}>
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse-${index}`}
                >
                    {displayTitle}
                </button>
            </h2>
            <div
                id={`collapse-${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading-${index}`}
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body">
                    <ul style={{ paddingLeft: "0", marginLeft: "20px" }}>
                        {data.map((item, idx) => (
                            <li key={idx} style={{ listStylePosition: "outside", margin: 0, padding: 0 }}>
                                <span>
                                    {Object.entries(item).map(([key, value], subIdx) => (
                                        <span key={subIdx}>
                                             {value || "N/A"}
                                            {subIdx < Object.entries(item).length - 1 && ", "}
                                        </span>
                                    ))}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default useModal;