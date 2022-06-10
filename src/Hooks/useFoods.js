import axios from "axios";
import { useEffect, useState } from "react";

const useFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get("data.json").then((res) => setFoods(res.data));
    }, []);

    return [foods, setFoods];
};

export default useFoods;
