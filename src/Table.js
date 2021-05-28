import React from 'react';
import './table.css';
import {useSelector} from 'react-redux';
import {selectCenter } from './features/Center/centerSlice';
function Table() {
    const centers = useSelector(selectCenter);
    console.log('useSelector : '+JSON.stringify(centers));
    return (
        <div>
 {
            centers.length!=0? (<table className="app__table">
            <thead>
                <tr>
                <td>name</td>
                <td>address</td>
                <td>pincode</td>
                <td>date</td>
                <td>available_capacity_dose1</td>
                <td>available_capacity_dose2</td>
                <td>slots</td>
                <td>fee</td>
                <td>vaccine</td>
                <td>min_age_limit</td>
                <td>lat</td>
                <td>long</td>
                </tr>
            </thead>
            <tbody>
        {centers.map(({name,address,pincode,date,available_capacity_dose1,available_capacity_dose2,slots,fee,vaccine,min_age_limit,lat,long,center_id}) =>(
          <tr key={center_id}>
          <td>{name}</td>
          <td>{address}</td>
          <td>{pincode}</td>
          <td>{date}</td>
          <td>{available_capacity_dose1}</td>
          <td>{available_capacity_dose2}</td>
          <td>{slots}</td>
          <td>{fee}</td>
          <td>{vaccine}</td>
          <td>{min_age_limit}</td>
          <td>{lat}</td>
          <td>{long}</td>
          </tr>
        ))}
        </tbody>
      </table>) : ( 
          <> 
                <p style={{textAlign:'center'}}>No Data to display</p>
          </>
      )
        }
        </div>
        
    )
}

export default Table
