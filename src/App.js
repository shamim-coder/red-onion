import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/User/Login/Login";
import Registration from "./Components/User/Registration/Registration";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
