import React from 'react';
import TableHeaderAtom from '../atoms/TableHeaderAtom';
import TableBodyMolecule from '../molecules/TableBodyMolecule';

const TableOrganism = ({ headingOrderGuide, data, titleTable, handleDownload, handleSiigoFormat, fileNameId, iconActionsList }) => {

  if(iconActionsList)  headingOrderGuide.actions = "Accciones";

  return (
    <div className="table-responsive">

      <h2>{titleTable}</h2> 

      {handleDownload && <div> <a style={{cursor:"pointer",color:"green"}} onClick={()=>handleDownload(fileNameId)}>Descargar</a> </div>}
      {/*handleSiigoFormat && <div> <a style={{cursor:"pointer",color:"blue"}} onClick={()=>handleSiigoFormat(fileNameId)}>Siigo</a> </div>*/}


      <table className="table table-striped table-bordered">

        <TableHeaderAtom
          headers={headingOrderGuide} />

        <TableBodyMolecule
          data={data}
          headingOrderGuide={headingOrderGuide}
          iconActionsList={iconActionsList} />

      </table>
    </div>
  );
}

export default TableOrganism;
