import { useState } from "react";

function Card({id,image,info,price,name,removeTour}){
    const[readmore,setReadmore]=useState(false);

const description=readmore?info:`${info.substring(0,200)}....`
function readmoreHandler(){

    setReadmore(!readmore);
}

return(
    <div className="card">
    <div className="tour-info">
    <img src={image} className="image"/>  
    <div className="tour-details">
      <h4 className="tour-price">${price}</h4>
<h4 className="tour-name">{name}</h4>
</div>
<div className="description">
{description}
<span  className="read-more" onClick={readmoreHandler}>
    {readmore?'showless':'read more'}
</span>
</div>
    </div>
   <button className="btn-read" onClick={()=>removeTour(id)}>
    NOT INTERSED.
   </button>
</div>
);
}
export default Card;