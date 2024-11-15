import React, { useState } from 'react';
import TableBodyMolecule from '../molecules/TableBodyMolecule';
import TableHeaderAtom from '../atoms/TableHeaderAtom';
import Button from '../atoms/Button';

const ModalTableOrganisms = ({ data, headers, modalTitle, showModal, handleClose }) => {
    

    return (
        <div>
            {showModal && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" onClick={handleClose}></button>
                            </div>
                            <div className="modal-body">
                                {/* Table inside modal */}
                                <table className="table table-bordered">
                                    <TableHeaderAtom headers={headers} />
                                    <TableBodyMolecule data={data} />
                                </table>
                            </div>
                            <div className="modal-footer">
                                
                                <Button onClick={handleClose} >Retry</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalTableOrganisms;
