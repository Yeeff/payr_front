
import React, { useState } from 'react';
import Template from '../templates/Template';
import { uploadFile, processInfo, downloadFile } from '../../Services/FileServices';
import {  isValid } from 'date-fns';

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
  const [showDowloadButton, setShowDowloadButton] = useState(false);


  const [showFormatErrosModal, setShowFormatErrosModal] = useState(false);

  const handleFormatErrosModalClose = () => setShowFormatErrosModal(false);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const isDateSelectable = (date) => {
    if (!isValid(date)) return false;
    const day = date.getDate();
    return day === FIRST_DAY_OF_MONTH || day === FIFTEENTH_DAY_OF_MONTH;
  };

  const handleDateChange = (date) => {
    if (isDateSelectable(date)) {
      setSelectedDate(date);
    } else {
      alert('Please select the 1st or 15th of the month.');
    }
  };


  const handleProcess = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Por favor subir un archivo primero.');
      return
    }

    try {
      const response = await processInfo(selectedDate);
      setProcessedData(response.data);
      setShowProcessedData(true);
      setShowDowloadButton(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDownload = async () => {
    try {
      const response = await downloadFile();

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'processed_file.xlsx'); 
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error(err);
    }
  };

  const onLoadFile = async (event) => {
    event.preventDefault();

    if (!file || !selectedDate) {
      alert('Por favor escoge un archivo y una fecha primero.');
      return
    }

    try {
      const response = await uploadFile(file, selectedDate);
      setIsFileUploaded(true);
      setFileErrors();
    } catch (error) {
      if (error.response) {
        if (error.response.status === UNPROCESSABLE_ENTITY_HTTP_ERROR) {

          const FormatedToDataTable = Object.entries(error.response.data.items).map(([cell, description]) => ({
            cell,
            description
          }));

          setFileErrors(FormatedToDataTable);
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
      isDateSelectable={isDateSelectable}

      onProcess={handleProcess}
      onDownload={handleDownload}
      processedData={processedData}
      showProcessedData={showProcessedData}
      showDowloadButton={showDowloadButton}

      fileFormatErrors={fileErrors}

      showFormatErrosModal={showFormatErrosModal}
      handleFormatErrosModalClose={handleFormatErrosModalClose}
    />
  );
};

export default UploadInfoPage;
