import ButtonPrimary from "../atoms/ButtonPrimary";
import { useFileContext } from '../../context/FileListContext';
import ButtonDanger from "../atoms/ButtonDanger";

function FileRepresentation({ id, uploadedFileName, handleProcess, onDeleteFile, loading }) {


    return (
        <div className="d-flex align-items-center mt-3">

            <div className="me-3">
                <h6>{uploadedFileName}</h6>
            </div>

            <div className="d-flex">

                <ButtonPrimary onClick={() => handleProcess(uploadedFileName)} disabled={loading}>Procesar archivo</ButtonPrimary>

                <ButtonDanger onClick={() => onDeleteFile(uploadedFileName)} disabled={loading}>Borrar</ButtonDanger>


            </div>

        </div>
    );
}

export default FileRepresentation;
