import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/User/Login/Login";
import Registration from "./Components/User/Registration/Registration";
import Breakfast from "./Components/Home/Foods/Breakfast/Breakfast";
import Lunch from "./Components/Home/Foods/Lunch/Lunch";
import Dinner from "./Components/Home/Foods/Dinner/Dinner";
import NotFound from "./Components/Shared/NotFound/NotFound";
import Cart from "./Components/Shared/Cart/Cart";
import FoodDetails from "./Components/FoodDetails/FoodDetails";
import { createContext, useState } from "react";

export const CartContext = createContext([]);

function App() {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            <Header cart={cart}></Header>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/" element={<Breakfast />} />
                    <Route path="/breakfast" element={<Breakfast />} />
                    <Route path="/lunch" element={<Lunch />} />
                    <Route path="/dinner" element={<Dinner />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Registration />} />

                <Route path="/food/:id" element={<FoodDetails />} />

                <Route path="/cart" element={<Cart />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
        </CartContext.Provider>
    );
}

export default App;
