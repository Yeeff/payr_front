import React, { useState } from 'react';
import ProcessedData from '../organisms/ProcessedData';
import axios from 'axios';

function FileRepresentation({ uploadedFile, show }) {
    const [processedData, setProcessedData] = useState(null);
    const [error, setError] = useState('');

    const handleProcessFile = async () => {
        try {
            const response = await axios.post('http://localhost:8090/process-file', { fileId: uploadedFile.id });
            setProcessedData(response.data); // Assume backend returns processed data
        } catch (err) {
            setError('Failed to process the file.');
            console.error(err);
        }
    };

    const handleDownloadFile = async () => {
        try {
            const response = await axios.get(`http://localhost:8090/download-file/${uploadedFile.id}`, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'processed_file.xlsx'); // File name
            document.body.appendChild(link);
            link.click();
        } catch (err) {
            setError('Failed to download the file.');
            console.error(err);
        }
    };

    return (
        <div>
            {show &&
                <div className="d-flex align-items-center mt-3">

                    <div className="me-3">
                        <h5>{uploadedFile.name}</h5>
                    </div>

                    <div className="d-flex">
                        <button className="btn btn-success me-2" onClick={handleProcessFile}>
                            Process File
                        </button>
                        <button className="btn btn-secondary" onClick={handleDownloadFile}>
                            Download File
                        </button>
                    </div>

                    {error && <p className="text-danger ms-3">{error}</p>}

                    {processedData && <ProcessedData data={processedData} />}
                </div>}
        </div>
    );
}

export default FileRepresentation;
