import { ClipLoader } from "react-spinners";

function LoderSpinner({loding}){
    return (
        <>
        <ClipLoader color="gray" loading={loding} size={25} />
        </>
    );
}

export default LoderSpinner;