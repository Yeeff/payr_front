import React, { useState } from 'react';
import axios from 'axios';

function FileRepresentation({ uploadedFile, show, onProcessFile, onDownload, showDowloadButton }) {
    const [error, setError] = useState('');

    return (
        <div>
            {show &&
                <div className="d-flex align-items-center mt-3">

                    <div className="me-3">
                        <h5>{uploadedFile.name}</h5>
                    </div>

                    <div className="d-flex">
                        <button className="btn btn-success me-2" onClick={onProcessFile}>
                            Procesar archivo
                        </button>
                        {showDowloadButton
                            && <button className="btn btn-secondary" onClick={onDownload}>
                                Descargar archivo
                            </button>}

                    </div>

                    {error && <p className="text-danger ms-3">{error}</p>}
                </div>}
        </div>
    );
}

export default FileRepresentation;
