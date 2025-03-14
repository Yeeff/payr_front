import FileRepresentation from "../molecules/FileRepresentation";
import { useFileContext } from "../../context/FileListContext";
import { useEffect } from "react";
import { Container, Row, Col, Spinner, Card } from "react-bootstrap";

function FileListOrganism() {
  const { fileList, onFirstLoad, handleProcess, onDeleteFile, loading } = useFileContext();

  useEffect(() => {
    onFirstLoad();
  }, []);

  return (
    <Container className="mt-4">
      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
          <p>Extrayendo datos...</p>
        </div>
      )}

      <Row>
        {fileList.map((file) => (
          <Col key={file.id} md={12} className="mb-3">

            <FileRepresentation
              id={file.id}
              uploadedFileName={file.name}
              handleProcess={handleProcess}
              onDeleteFile={onDeleteFile}
              loading={loading}
            />

          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FileListOrganism;
