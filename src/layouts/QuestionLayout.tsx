import {Outlet} from "react-router-dom";

function  QuetionLayout(){
    return (
        <div style={{height:"100vh"}}>
            <div><Outlet/></div>
        </div>
    )
}
export default QuetionLayout