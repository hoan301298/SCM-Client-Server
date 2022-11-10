import { PostAdd } from "@mui/icons-material";
import { SCMLocation } from "../type/SCMLocation";
import { Truck } from "../type/Truck";
import { server } from "./settings";

export async function getLocationData(): Promise<Array<SCMLocation>>{
    const response = await fetch(server + "api/location")
    if(!response.ok){
        throw new Error(response.statusText);
    } else{
        return response.json();
    }
}

export async function saveLocation(location:SCMLocation):Promise<any>{
    const response = await fetch(server + "api/location", {method:'POST',headers: {'Content-Type': 'application/json'}, body:JSON.stringify(location)})
}