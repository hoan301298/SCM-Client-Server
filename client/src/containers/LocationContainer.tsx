import { useState,useEffect, FC } from "react";
import AddLocationComponent from "../components/AddLocationComponent";
import LocationDatagridComponent from "../components/LocationDatagridComponent";
import LocationMap from "../components/LocationMap";
import {Truck} from "../type/Truck";

const LocationContainer=()=>{
    const [adding, setAdding]=useState<boolean>(false);
    
    return(
        <div>
            <h1>Location</h1>
            <button onClick={e=>setAdding(!adding)}>+add</button>
            {adding&&<AddLocationComponent/>}
            <LocationDatagridComponent/>
        </div>
    )
}
export default LocationContainer;