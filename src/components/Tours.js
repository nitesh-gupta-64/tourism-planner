import Card from "./Card";

function Tours({tours, removeTour})
{
    return (
        <div className="container flex items-center justify-center flex-col">
            <div>
                <h2 className="title font-black">Plan With Love</h2>
            </div>
            <div className="cards flex justify-center flex-wrap max-w-[1300px] mx-auto">
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;