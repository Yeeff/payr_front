
import React, { useState } from 'react';
import Template from '../templates/Template';
import { uploadFile, processInfo } from '../../Services/FileServices';
import { parseISO } from 'date-fns';

const FIRST_DAY_OF_MONTH = 1;
const FIFTEENTH_DAY_OF_MONTH = 15;

const UNPROCESSABLE_ENTITY_HTTP_ERROR = 422

const UploadInfoPage = () => {
  const [selectedDate, setSelectedDate] = useState();

  const [fileErrors, setFileErrors] = useState();
  const [file, setFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const [processedData, setProcessedData] = useState();
  const [showProcessedData, setShowProcessedData] = useState(false);

  const [showFormatErrosModal, setShowFormatErrosModal] = useState(false);

  const handleFormatErrosModalClose = () => setShowFormatErrosModal(false);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleDateChange = (event) => {
    const date = parseISO(event.target.value);
    const day = date.getDate();

    if (day !== FIRST_DAY_OF_MONTH && day !== FIFTEENTH_DAY_OF_MONTH) {
      alert('Please select the 1st or 15th of the month.');
      setSelectedDate('');
    } else {
      setSelectedDate(event.target.value);
    }
  };

  const handleProcess = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Please upload a file first.');
      return
    }

    try {
      const response = await processInfo(selectedDate);
      setProcessedData(response.data); 
      setShowProcessedData(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDownload = () => {
    alert('Downloading processed file...');
  };

  const onLoadFile = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Please upload a file first.');
      return
    }

    try {
      const response = await uploadFile(file);
      setIsFileUploaded(true);
      setFileErrors(); 
    } catch (error) {
      if (error.response) {
        if (error.response.status === UNPROCESSABLE_ENTITY_HTTP_ERROR) {
          setFileErrors(error.response.data.items);
          setShowFormatErrosModal(true);
        } else {
          console.error(`Error with status ${error.response.status}:`, error.response.data);
        }
      } else {
        console.error('Unexpected error:', error.message);
      }
    }
    
  };

  return (
    <Template

      onFileChange={handleFileChange}
      isFileUploaded={isFileUploaded}
      file={file}
      onLoadFile={onLoadFile}

      onDateChange={handleDateChange}
      selectedDate={selectedDate}

      onProcess={handleProcess}
      onDownload={handleDownload}
      processedData={processedData}
      showProcessedData={showProcessedData}      

      fileFormatErrors={fileErrors}

      showFormatErrosModal={showFormatErrosModal}
      handleFormatErrosModalClose={handleFormatErrosModalClose}
    />
  );
};

export default UploadInfoPage;
