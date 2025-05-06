import React, { useState, useEffect } from 'react';
import Template from '../templates/Template';
import { uploadFile, downloadFile, getFiles, deleteFile, downloaSiigodFile } from '../../Services/FileServices';
import { getFormsPeriods } from '../../Services/EmployChangesApi';
import { processInfo } from '../../Services/PayrollServices';
import { isValid, parse } from 'date-fns';
import { FileListProvider } from '../../context/FileListContext';
import { ProcessedDataProvider } from '../../context/ProcessedDataContext';
import { FileSavingFormProvider } from '../../context/FileSavingFormContext'
import useModal from '../../hooks/useModal';

import ContentTypeModal from '../../utils/Constanst';

const FIRST_DAY_OF_MONTH = 1;
const SIXTEENTH_DAY_OF_MONTH = 16;

const UNPROCESSABLE_ENTITY_HTTP_ERROR = 422

const UploadInfoPage = () => {
  const [selectedDate, setSelectedDate] = useState();

  const [fileErrors, setFileErrors] = useState();
  const [file, setFile] = useState(null);
  const [fileNameId, setFileNameId] = useState();
  const [fileList, setFileList] = useState([]);

  const [processedData, setProcessedData] = useState();
  const [showProcessedData, setShowProcessedData] = useState(false);
  const [personPayrollDetails, setPersonPayrollDetails] = useState(false);


  const [isFileListLoading, setisFileListLoading] = useState(false);
  const [isDownlodingFile, setisDownlodingFile] = useState(false);
  const [isSavingFile, setisSavingFile] = useState(false);

  const [showModalByType, setShowModalByType] = useState(false);

  const [selectedFormId, setSelectedFormId] = useState(null);
  const [formsPeriods, setFormsPeriods] = useState([]);

  useEffect(() => {
    (async () => {
      const periods = await getFormsPeriods();
      const filtered = periods.data.data.filter(
        (form) =>
          Array.isArray(form.formsType) &&
          form.formsType.some((type) => type.name === "Quincenal")
      );
      setFormsPeriods(filtered);
    })();
  }, []);

  const handleModalClose = () => {
    setFileErrors();
    setShowModalByType(null);
  };
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const isDateSelectable = (date) => {
    if (!isValid(date)) return false;
    const day = date.getDate();
    return day === FIRST_DAY_OF_MONTH || day === SIXTEENTH_DAY_OF_MONTH;
  };

  const handleDateChange = (e) => {
    const id = e.target.value;
    setSelectedFormId(id); // This updates state for future renders

    const filteredForm = formsPeriods.find((period) => period.id == id);

    const parsedDate = typeof filteredForm.dateStart === 'string'
      ? parse(filteredForm.dateStart, 'yyyy/MM/dd', new Date())
      : filteredForm.dateStart;

    if (isDateSelectable(parsedDate)) {
      setSelectedDate(parsedDate);
    } else {
      alert('El periodo de la planilla no es correct para el rango de una quincena.');
    }
  };


  const getFilesFromApi = async () => {
    const response = await getFiles();
    setFileList(response.data);
  }

  const handleDeleteFile = (fileName) => {
    setisFileListLoading(true);

    deleteFile(fileName);
    getFilesFromApi();

    setisFileListLoading(false);
  }

  const handleProcess = async (fileName) => {

    setisFileListLoading(true);

    try {
      const response = await processInfo(fileName);
      setFileNameId(fileName);
      setProcessedData(response.data);
      setShowProcessedData(true);
    } catch (err) {
      console.error(err);
    } finally {
      setisFileListLoading(false);
    }
  };

  const handleDownload = async (fileNameId) => {
    setisDownlodingFile(true);

    try {
      const response = await downloadFile(fileNameId);

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'processed_file.xlsx');
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error(err);
    } finally {
      setisDownlodingFile(false);
    }
  };

  const handleSiigoFormat = async () => {
    setisDownlodingFile(true);

    try {
      const response = await downloaSiigodFile(fileNameId);

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'siigo-processed_file.xlsx');
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error(err);
    } finally {
      setisDownlodingFile(false);
    }
  }

  const onLoadFile = async (event) => {
    event.preventDefault();


    if (!file || !selectedDate) {
      alert('Para continuar debes elegir un archivo y un periodo.');
      return
    }

    setisSavingFile(true);

    try {
      const response = await uploadFile(file, selectedDate,selectedFormId );

      getFilesFromApi();

    } catch (error) {
      if (error.response) {
        if (error.response.status === UNPROCESSABLE_ENTITY_HTTP_ERROR) {

          const formatedToDataTable = Object.entries(error.response.data.items).map(([cell, description]) => ({
            cell,
            description
          }));

          onShowModalWithFileErrorList(formatedToDataTable);

        } else {
          console.error(`Error with status ${error.response.status}:`, error.response.data);
        }
      } else {
        console.error('Unexpected error:', error.message);
      }
    } finally {
      setisSavingFile(false);

    }

  };

  const onShowModalWithFileErrorList = (FormatedToDataTable) => {
    setFileErrors(FormatedToDataTable);
    setShowModalByType(ContentTypeModal.ERROR_FILE_LIST);

  }

  const onShowModalWithEmployeeDetails = (personPayrollData) => {

    console.log(personPayrollData.sendOnClick)

    setPersonPayrollDetails(personPayrollData.sendOnClick);
    setShowModalByType(ContentTypeModal.EMPLOYEE_PAYROLL_DETAILS);
  };


  return (
    <FileListProvider onShowModalWithEmployeeDetails={onShowModalWithEmployeeDetails}
      fileList={fileList} handleProcess={handleProcess} onFirstLoad={getFilesFromApi} onDeleteFile={handleDeleteFile} loading={isFileListLoading}>
      <ProcessedDataProvider loding={isDownlodingFile}>
        <FileSavingFormProvider loding={isSavingFile}>

          {useModal(showModalByType, handleModalClose, fileErrors, personPayrollDetails)}

          <Template

            onFileChange={handleFileChange}
            file={file}
            onLoadFile={onLoadFile}

            onDateChange={handleDateChange}
            selectedDate={selectedDate}
            isDateSelectable={isDateSelectable}
            formsPeriods={formsPeriods}
            selectedFormId={selectedFormId}

            onDownload={handleDownload}
            handleSiigoFormat={handleSiigoFormat}
            fileNameId={fileNameId}
            processedData={processedData}
            showProcessedData={showProcessedData}

            onSeeEmployeeDetails={onShowModalWithEmployeeDetails}
          />
        </FileSavingFormProvider>
      </ProcessedDataProvider>
    </FileListProvider>

  );
};

export default UploadInfoPage;
