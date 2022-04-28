import React from 'react';
import Vehicle from './Vehicle.js';

//export default function VehicleList({ vehicles }) is a functional component //
export default function VehicleList({ vehicles }) {
  return (
    <div className="traffic">
      {/* this component takes in a prop called vehicles, which is an array 
      of vehicle strings */}
      {/* map through the vehicles array in props */}
      {/* for each item render a Vehicle component. Pass the vehicl string as
       a prop called vehicle to the Vehicle component.  */}
      {vehicles.map((vehicle) => <Vehicle key ={vehicle} vehicle= {vehicle} />)}
    </div>
  );
}
