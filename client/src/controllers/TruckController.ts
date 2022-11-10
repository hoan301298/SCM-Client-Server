import { Truck } from "../type/Truck";
import { server } from "./settings";

export async function getTruckData(): Promise<any>{
    const response = await fetch(server +"api/truck")
    if(!response.ok){
        throw new Error(response.statusText);
    } else{
        return response.json();
    }
}