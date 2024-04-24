import Card from "./Card";


function Tours({tours,removeTour}){//whay this square bracket use state banaya

return (
    <div className="container">
        <div >
            <h2 className="title">plan with love</h2>
</div> 
             
<div className="cards">
    {//why this square bracket

        tours.map((tour)=>{

            return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
        })
    }
</div>
    </div>
);
}
export default Tours;