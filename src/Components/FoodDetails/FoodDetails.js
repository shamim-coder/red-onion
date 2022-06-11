import { faCartShopping, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../App";
import useFoods from "../../Hooks/useFoods";

const FoodDetails = () => {
    const { id } = useParams();

    const [foods] = useFoods();

    const singleFood = foods && foods?.find((food) => food.id === id);

    const [cart, setCart] = useContext(CartContext);

    const handleCart = () => {
        setCart([...cart, singleFood]);
    };

    const [count, setCount] = useState(1);

    return (
        <div className="container mx-auto grid grid-cols-2 items-center gap-20">
            <div className="w-5/6">
                <h1 className="text-5xl font-bold mb-5">{singleFood?.title}</h1>
                <p className="text-lg">{singleFood?.description}</p>
                <div className="text-4xl font-bold flex gap-10 items-center mt-5">
                    <span>${singleFood?.price}</span>{" "}
                    <span className="flex text-2xl font-normal border rounded-3xl px-5 py-2 items-center gap-4">
                        <FontAwesomeIcon onClick={() => setCount(count - 1)} className="text-lg hover:text-red-600 cursor-pointer" icon={faMinus} />
                        <input className="w-10 text-center" type="text" value={count} defaultValue={1} />
                        <FontAwesomeIcon onClick={() => setCount(count + 1)} className="text-lg hover:text-red-600 cursor-pointer" icon={faPlus} />
                    </span>
                </div>
                <button onClick={handleCart} className="bg-[#F91944] text-white flex items-center gap-5 px-8 py-3 text-xl rounded-full mt-5">
                    <FontAwesomeIcon icon={faCartShopping} /> Add
                </button>
            </div>
            <div className="">
                <img className="w-full p-5" src={singleFood?.picture} alt="" />
            </div>
        </div>
    );
};

export default FoodDetails;
