import { useState,useEffect, FC } from "react";
import TruckDatagridComponent from "../components/TruckDatagridComponent";

const TruckContainer=()=>{
    return(
        <div>
            <h1>SCM Application</h1>
            <TruckDatagridComponent/>
        </div>
    )
}
export default TruckContainer;