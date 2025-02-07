import FileRepresentation from '../molecules/FileRepresentation';
import { useFileContext } from '../../context/FileListContext';
import { useEffect } from 'react';

import LoderSpinner from '../atoms/LoderSpinner';

function FileListOrganism() {

    const { fileList, onFirstLoad, handleProcess, onDeleteFile, loding } = useFileContext();

    useEffect(() => {
        onFirstLoad();
    }, []);

    return (<>

        <LoderSpinner loding={loding}></LoderSpinner>

        {fileList.map((file) =>
            <FileRepresentation
                id={file.id}
                uploadedFileName={file.name}
                handleProcess={handleProcess}
                onDeleteFile={onDeleteFile}
                loading={loding}
            ></FileRepresentation>
        )}
    </>);
}

export default FileListOrganism;