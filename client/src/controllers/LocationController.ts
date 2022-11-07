import { Truck } from "../type/Truck";

export async function getLocationData(): Promise<Array<Location>>{
    const response = await fetch("http://localhost:8080/api/location")
    if(!response.ok){
        throw new Error(response.statusText);
    } else{
        return response.json();
    }
}