import { useState } from "react";
import { useFileContext } from "../../context/FileListContext";

export default function IconSeeEmployeePersonDetails( sendOnClick){

    const {onShowModalWithEmployeeDetails} = useFileContext();

    
    return(< a onClick={()=>onShowModalWithEmployeeDetails(sendOnClick)} style={{cursor:"pointer", color:"blue"}}>Ver</a>);
}