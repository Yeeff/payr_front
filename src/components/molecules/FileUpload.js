import React from 'react';
import InputFieldFile from '../atoms/InputFieldFile';
import Button from '../atoms/ButtonPrimary';

const FileUpload = ({onLoadFile, onFileChange, isFileUploaded }) => (
  <div>
    <label htmlFor="fileUpload">Subir archivo</label>
    <InputFieldFile id="fileUpload" type="file" onChange={onFileChange}/>
    <Button onClick={onLoadFile}>Cargar</Button>
    {isFileUploaded && <p>Archivo subido satisfactoriamente</p>}
  </div>
);

export default FileUpload;
