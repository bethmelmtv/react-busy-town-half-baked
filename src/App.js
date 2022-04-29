import './App.css';
import VehicleList from './VehicleList';
import TrafficLight from './TrafficLight';
import { useState } from 'react';

function App() {
  // track the following state with a few useState hooks:
  // lightColor should be a string that starts out as 'red'
  // lizardSize should be a number that starts out as 10
  // alienSize should be a number that starts out as 10
  // traffic is complicated. It should be an array of strings that starts out as ['car', 'truck']

  const [lightColor, setLightColor] = useState('red');
  const [lizardSize, setLizardSize] = useState(10);
  const [alienSize, setAlienSize] = useState(10);
  const [traffic, setTraffic] = useState(['car', 'truck']);

  const ATTACK = 1;


  function yellow() {
    setLightColor('yellow');
  }

  function green() {
    setLightColor('green');
  }

  function red() {
    setLightColor('red');
  }

  function addTruck() {
    traffic.push('truck');
    setTraffic([...traffic]);
  }

  function addCar(){
    traffic.push('car');
    setTraffic([...traffic]);
  }

  function addMotorcycle(){
    traffic.push('motorcycle');
    setTraffic([...traffic]);
  }

  function addBus(){
    traffic.push('bus');
    setTraffic([...traffic]); //setting state, then we have to spread the traffic array so when we set traffic, it gets all the information
  }


  return (
    <div className="App">
      <div className="fight">
        <div className="monster">
          {/* the width of the alien should be ten times whatever the alien size is in state */}
          <img src="alien.png" style = {{ width: alienSize * 10 }} />
          <div className='buttons'>
            {/* when you click this button, the alien's size in state should go up by one */}
            <button onClick = {() => setAlienSize(alienSize + ATTACK)}>Oh no! The alien is gobblin up all the electricity!</button>
            {/* when you click this button, the lizard's size in state should go down by one */}
            <button onClick = {() => setLizardSize(lizardSize - ATTACK)}>Amazing! The alien zapped the lizard!</button>
          </div>
        </div>
        <div className="monster">
          {/* the width of the lizard should be ten times whatever the alien size is in state */}
          <img src="lizard.png" style = {{ width: lizardSize * 10 }} />
          <div className="buttons">
            {/* when you click this button, the lizard's size in state should go up by one */}
            <button onClick= {() => setLizardSize(lizardSize + ATTACK)}>Yegads! The lizard is ramping up to its final form!</button>
            {/* when you click this button, the alien's size in state should go up by one */}
            <button onClick={() => setAlienSize(alienSize + ATTACK)}>Oh my! The lizard chomped down on the alien!</button>
          </div>
        </div>
      </div>
      <TrafficLight color={lightColor} />
      <div className="buttons">
        {/* when you click this button, the color of the light in state should be set to 'red' */}
        <button onClick = {red}>Red</button>
        {/* when you click this button, the color of the light in state should be set to 'yellow' */}
        <button onClick = {yellow}>Yellow</button>
        {/* when you click this button, the color of the light in state should be set to 'green' */}
        <button onClick = {green}>Green</button>
      </div>
      {/* 
      the VehicleList component takes in one prop: vehicles.
      This prop should be an array of strings like ['car', 'truck', 'truck', 'car', 'bus'].
      Do you have something like that in state that you could pass as a vehicles prop? 
      */}
      <VehicleList vehicles= {traffic} />
      <div className='buttons'>
        {/* This part is weird */}
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'car' to the end */}
        <button onClick ={addCar}>Car</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'bus' to the end */}
        <button onClick ={addBus}>Bus</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'truck' to the end */}
        <button onClick ={addTruck}>Truck</button>
        {/* {/another option * onClick={() => {traffic.push(‘motorcycle’); setTraffic([…traffic]) */} 
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'motorcycle' to the end */}
        <button onClick={addMotorcycle}>Motorcycle</button>
      </div>

    </div>
  );
}


export default App;

