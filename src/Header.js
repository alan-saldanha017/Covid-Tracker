import React, {useState , useEffect} from 'react';
import './Header.css';
import {Select,MenuItem,TextField,InputLabel} from '@material-ui/core';
import moment from 'moment';
import {setCenterDetails} from "./features/Center/centerSlice";
import {useDispatch} from 'react-redux';

function Header(){
  const [StateList, setStateList] = useState([]);
  const [StateSelection, setStateSelection] = useState([]);
  const [SearchDate, SetSearchDate] = useState( );
  const [DistrictList, setDistrictList] = useState([]);
  const [DistrictSelection, setDistrictSelection] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const getStatesData = async () =>{
        await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states')
        .then((response) => response.json())
        .then((data) =>{
       const Sl = (data.states).map((item) =>({
         name: item.state_name,
         id: item.state_id
       }));
       setStateList(Sl);
      });
    }
    getStatesData();
  }, []);

  const OnStateChange = (e)=>{
    const SelectedState = e.target.value;
    setStateSelection(SelectedState);

    const getDistrictData = async () =>{
      await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${SelectedState}`)
      .then((response) => response.json())
      .then((data) =>{
     const Dl = (data.districts).map((item) =>({
       name: item.district_name,
       id: item.district_id
     }));
     setDistrictList(Dl);
    });
  }
  getDistrictData();

  };

  const OnDistrictChange = (e) => {
    const SelectedDistrict=e.target.value;
    setDistrictSelection(SelectedDistrict);
  }

  const OnDateChange = (e) => {
    const SelectedDate=moment(e.target.value).format("DD-MM-YYYY")
    SetSearchDate(SelectedDate);
    const getCenters = async () =>{
      console.log(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${DistrictSelection}&date=${SelectedDate}`);
      await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${DistrictSelection}&date=${SelectedDate}`)
      .then((response) => response.json())
      .then((data) =>{
        dispatch(setCenterDetails(data.sessions));        

       });
  }
  getCenters();

  }

    return(
        <div className="header">
        <h1> COVID-19 Tracker</h1>
          <Select variant="outlined" value={StateSelection} onChange={OnStateChange}>
             {
               StateList.map((state)=>(
                <MenuItem key={state.id} value={state.id}>{state.name}</MenuItem>
               ))
             }
            </Select>
            <Select variant="outlined" value={DistrictSelection} onChange={OnDistrictChange} placeholder="Please Select District">
             {
               DistrictList.map((district)=>(
                <MenuItem key={district.id} value={district.id}>{district.name}</MenuItem>
               ))
             }
            </Select>
            <TextField 
    id="date"
    label="Pick A Date"
    type="date"
    defaultValue=""
    InputLabelProps={{
      shrink: true,
    }}
    onChange={OnDateChange}
  />
      </div>
    );
}
export default Header;