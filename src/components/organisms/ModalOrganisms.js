import React, { useState } from 'react';
import Button from '../atoms/ButtonPrimary';

const ModalOrganisms = ({children, modalTitle, showModal, handleClose }) => {

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

                                {children}

                            </div>
                            <div className="modal-footer">

                                <Button onClick={handleClose} >OK</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalOrganisms;
