import { useState,useEffect, FC } from "react";
import LocationDatagridComponent from "../components/LocationDatagridComponent";
import LocationMap from "../components/LocationMap";


const LocationContainer=()=>{
    return(
        <div>
            <h1>Location</h1>
            <LocationDatagridComponent/>
        </div>
    )
}
export default LocationContainer;