import React, { useEffect } from "react";
import ButtonAtom from "../atoms/ButtonAtom";
import { createPortal } from "react-dom";

const ModalOrganisms = ({ children, modalTitle, showModal, handleClose, showFooter = true }) => {

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [showModal]);

  if (!showModal) return null;

  return createPortal(
    <>
      {/* Modal Backdrop */}
      <div className="modal-backdrop fade show"></div>

      {/* Modal */}
      <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-hidden={!showModal}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{modalTitle}</h5>
              <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">{children}</div>
            
            {showFooter && (
              <div className="modal-footer">
                <ButtonAtom onClick={handleClose}>OK</ButtonAtom>
              </div>
            )}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default ModalOrganisms;
