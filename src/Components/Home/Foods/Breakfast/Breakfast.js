import React, { useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { CartContext } from "../../../../App";

const Breakfast = () => {
    const { breakfastFood } = useOutletContext();
    const navigate = useNavigate();

    const [cart, setCart] = useContext(CartContext);

    const handleCart = (id) => {
        const selectedCart = breakfastFood.find((breakfast) => breakfast.id === id);
        setCart([...cart, selectedCart]);
    };

    return (
        <div className="grid grid-cols-3 gap-20">
            {breakfastFood.map((breakfast) => {
                const { title, description, picture, price, id } = breakfast;
                return (
                    <div className="text-center transition hover:shadow-lg rounded-lg px-10 pb-8 pt-5">
                        <img className="w-60 h-60 object-cover mx-auto mb-3" src={picture} alt="" />
                        <h1 className="text-xl font-semibold">{title.split(" ").slice(0, 4).join(" ")}</h1>
                        <p>{description.split(" ").slice(0, 5).join(" ")}.</p>
                        <h3 className="text-2xl font-semibold mt-4">${price}</h3>

                        <div className="flex justify-between mt-5">
                            <button onClick={() => handleCart(id)} className="bg-[#F91944] text-white px-3 py-1 rounded">
                                Add to Cart
                            </button>
                            <button onClick={() => navigate(`/food/${id}`)} className="bg-lime-600 text-white px-3 py-1 rounded">
                                See Details
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Breakfast;
