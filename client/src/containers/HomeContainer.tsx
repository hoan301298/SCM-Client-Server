import { useState,useEffect, FC } from "react";
import { Link, Route, Switch } from "react-router-dom";
import LocationContainer from "./LocationContainer";
import TruckContainer from "./TruckContainer";


const HomeContainer:FC=()=>{
    return(
        <div>
            <h1>SCM solution</h1>
            <div>
                <div>Application developer during Software engineering method course</div>
                <div>Customer Petri Helo University of Vaasa</div>
            </div>
        </div>
    )
}
export default HomeContainer;