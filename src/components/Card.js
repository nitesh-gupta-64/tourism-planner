import { useState } from "react";

function Card({id, image, info, price, name, removeTour})
{
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`;

    function readmoreHandler()
    {
        setReadmore(!readmore);
    }

    return (
    <div className="card w-[400px] max-w-[900%] h-max m-4 p-4 flex flex-col rounded-[10px] items-center">
        <img src={image} className="image w-[380px] aspect-square object-cover" alt=""></img>

        <div className="tour-info  my-[20px] mx-[5px]">
            <div className="tour-details">
                <h4 className="tour-price text-[#1faa59] text-[1.3rem]">₹ {price}</h4>
                <h4 className="tour-name text-2xl">{name}</h4>
            </div>

            <div className="description">
                {description}
                <span className="read-more text-[#12b0e8] cursor-pointer" onClick={readmoreHandler}>
                    {readmore ? 'Show less': 'Read more'}
                </span>
            </div>
        </div>

        <button className="btn-red text-center mt-[18px] py-[10px] px-[80px] border-[1px] border-solid border-[#b4161b] cursor-pointer rounded-[18px] font-bold bg-[#b4161b21] hover:bg-red-600 hover:text-white transition-all duration-200" onClick={() => removeTour(id)}>
            Not Interested
        </button>
    </div>
    );
}

export default Card;