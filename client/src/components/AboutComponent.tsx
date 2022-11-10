import { valueToPercent } from "@mui/base";
import { FC } from "react";
import { getAuthor, getKeyValues, saveKeyValues } from "../controllers/AboutController";

const AboutComponent:FC=()=>{
    saveKeyValues();
    const myArray = JSON.parse(getKeyValues() || '{}');
    const key = myArray.keys()[0];

    //function read keys and values and return them as div
    const renderKeyValues=()=>{
        return myArray.map((pair:any, index:number)=>{
            return <tr><td>{Object.keys(pair)}</td><td> {pair[Object.keys(pair)[0]]}</td></tr>
        })
    }

    return(
        <div>
            <table>
            {renderKeyValues()}
            </table>
        </div>
    )
}

export default AboutComponent;