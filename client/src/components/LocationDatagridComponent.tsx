import {useState, useEffect, FC } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Location } from "../type/Location";
import { getTruckData } from "../controllers/TruckController";
import { getLocationData } from "../controllers/LocationController";

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'lat',
    headerName: 'Latitude',
    width: 150,
    editable: false,
  },
  {
    field: 'lon',
    headerName: 'Longitude',
    width: 150,
    editable: false,
  }
];


/*
[
        { id: 1, licenceplate: 'ABC-123', name: 'Volvo'},
        { id: 2, licenceplate: 'XYZ-321', name: 'Scania'},
        { id: 3, licenceplate: 'AKU-313', name: 'Volvo' }
      ]
*/
const LocationDatagridComponent:FC=props=>{
  const [locationArray, setLocationArray] = useState<Array<any>>();
  useEffect(()=>{
      readLocationData();
  },[]);
  
  async function readLocationData(){
      await getLocationData()
      .catch(console.error)
      .then(response=>{
        response&&response!=null&&setLocationArray(response);
          console.log(JSON.stringify(response));
      })
  }
    return(
      <div>
        <h2>Locations</h2>
      {locationArray&&locationArray.length>0?(
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={locationArray}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
            </Box>
      ):(<h2>No data</h2>)}
      </div>
    )
}
export default LocationDatagridComponent;