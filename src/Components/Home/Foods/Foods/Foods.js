import React from "react";
import useFoods from "../../../../Hooks/useFoods";
import Breakfast from "../Breakfast/Breakfast";
import Dinner from "../Dinner/Dinner";
import Lunch from "../Lunch/Lunch";

const Foods = () => {
    const [foods] = useFoods();

    const breakfastFood = foods.filter((food) => food.category === "breakfast");
    const lunchFood = foods.filter((food) => food.category === "lunch");
    const dinnerFood = foods.filter((food) => food.category === "dinner");

    return (
        <section>
            {breakfastFood.map((breakfast) => (
                <Breakfast key={breakfast.id} breakfast={breakfast} />
            ))}
            {lunchFood.map((lunch) => (
                <Lunch key={lunch.id} lunch={lunch} />
            ))}
            {dinnerFood.map((dinner) => (
                <Dinner key={dinner.id} dinner={dinner} />
            ))}
        </section>
    );
};

export default Foods;
