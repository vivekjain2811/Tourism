import logo from './logo.svg';
import './App.css';
import { useState } from 'react';//we include this file. 
import data from './data';//also this file.
import Tours from './compoments/Tours';//also this file.
function App() {

const [tours,setTours]=useState(data);//use state ko use kra.
function removeTour(id)
{
  const newTours=tours.filter(tour=>tour.id!==id);//function banaya remove tourska  filtering ho rhi hai id ki
  setTours(newTours);
}
if(tours.length===0)
{
  return (
    <div className='refresh'>
      <h2>No Tours Left</h2>
    <button on onClick={()=>setTours(data)} className='btn-white'>
      refresh
    </button>
    </div>
  )
}
return (  
   <div>//parent div container.

<Tours tours={tours} removeTour={removeTour} ></Tours>//compoments use kra jo define kr diya.//tours naam ka prop usme array pass hua hai.//remove tour ka function ka prop 
//pass hua hai.
</div>
  );
}

export default App;
