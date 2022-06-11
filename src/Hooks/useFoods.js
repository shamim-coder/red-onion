import axios from "axios";
import { useEffect, useState } from "react";

const useFoods = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axios.get("https://api.npoint.io/ead15c1798fce69c06f0").then((res) => setFoods(res.data));
    }, []);

    return [foods, setFoods];
};

export default useFoods;
