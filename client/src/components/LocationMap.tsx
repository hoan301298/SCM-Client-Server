import { MarkEmailReadTwoTone } from "@mui/icons-material";
import { FC, ReactNode, useEffect, useState } from "react";
import { MapContainer, TileLayer,Marker, Popup } from 'react-leaflet'

import { getLocationData } from "../controllers/LocationController";


/** Component shows locations on the openstreetmap
 * see https://giuliacajati.medium.com/all-about-openstreetmap-using-react-js-c24fd0856aca
 */
const LocationMap:FC=()=>{
    const [locationArray, setLocationArray] = useState<Array<any>>();
    useEffect(()=>{
        readLocationData();
    },[]);
    
    type HeaderProps={
        children:JSX.Element;
    };

    async function readLocationData(){
        await getLocationData()
        .catch(console.error)
        .then(response=>{
          response&&response!=null&&setLocationArray(response);
            console.log(JSON.stringify(response));
        })
    }

    
    const markers:ReactNode[]|any =()=>{
        locationArray&&locationArray.map((marker, index)=>{
            return(
                <Marker position={[marker.lat, marker.lon]}>
                    <Popup>
                        {marker.name}
                    </Popup>
                </Marker>
            )
        })
    }

    // function Header(props: HeaderProps) {
    //     return <div>{markers}</div>;
    // }


    return(
        <div>
            <MapContainer center={[63.10, 21.62]} zoom={11} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
<Marker position={[63.1, 21.62]}>
      <Popup>
        I am a pop-up!
      </Popup>
  </Marker>                
                {/* {markers} */}


            </MapContainer>
        </div>
    );
}

export default LocationMap;