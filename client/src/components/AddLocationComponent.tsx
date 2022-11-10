import { FC, useState } from "react";
import { Truck } from "../type/Truck";
import { SCMLocation } from "../type/SCMLocation";
import { saveLocation } from "../controllers/LocationController";

interface Props{
    entity?:SCMLocation|Truck;
}
const AddLocationComponent:FC<Props>=(props:Props)=>{
    const [location, setLocation]=useState<SCMLocation>({name:"eka"});
   // const myEntity = Truck;
   // console.log(Object.keys(myEntity));

   const save=()=>{
        saveLocation(location);
   }

    return(
        <div>
            Nimi
            <input type="text" id="name" value={location.name} onChange={e=>setLocation({...location, name:e.target.value})}/>
            <br/>
            <button onClick={save}>Add</button>
        </div>
    )

}
export default AddLocationComponent;