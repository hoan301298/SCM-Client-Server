import { Truck } from "../type/Truck";

export async function getTruckData(): Promise<any>{
    const response = await fetch("http://localhost:8080/api/truck")
    if(!response.ok){
        throw new Error(response.statusText);
    } else{
        return response.json();
    }
}