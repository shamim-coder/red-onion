import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cart }) => {
    return (
        <div className="flex justify-between container mx-auto items-center py-5">
            <Link to="/">
                <img className="w-2/6" src={logo} alt="" />
            </Link>
            <div className="menu">
                <ul className="flex gap-10">
                    <li className="block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
                        <Link className="relative flex" to="/cart">
                            <FontAwesomeIcon className="flex-1 w-8 h-8" icon={faCartShopping} />
                            <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cart.length}</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
