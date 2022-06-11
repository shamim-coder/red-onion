import React, { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { CartContext } from "../../../../App";
import useFoods from "../../../../Hooks/useFoods";

const Foods = () => {
    const activeStyle = {
        textDecoration: "underline",
        color: "orange",
    };

    const navigate = useNavigate();

    const [cart] = useContext(CartContext);

    const [foods] = useFoods("data.json");
    const breakfastFood = foods.filter((food) => food.category === "breakfast");
    const lunchFood = foods.filter((food) => food.category === "lunch");
    const dinnerFood = foods.filter((food) => food.category === "dinner");

    return (
        <section className="container mx-auto ">
            <ul className="flex gap-10 justify-center py-20">
                <li>
                    <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/breakfast">
                        Breakfast
                    </NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/lunch">
                        Lunch
                    </NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/dinner">
                        Dinner
                    </NavLink>
                </li>
            </ul>

            <Outlet context={{ breakfastFood, lunchFood, dinnerFood }} />

            <button disabled={cart.length === 0 && true} onClick={() => navigate("/cart")} className={`${cart.length === 0 ? "bg-slate-300" : "bg-[#F91944]"} text-white px-10 py-3 mx-auto block rounded-lg mt-10`}>
                Checkout Your Foods
            </button>
        </section>
    );
};

export default Foods;
