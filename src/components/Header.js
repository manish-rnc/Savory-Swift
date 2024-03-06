import { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    // Subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-red-100 shadow-lg">
            <div className="logo-container">
                <Link to={"/"}><img className="w-[98] h-[92]" src={LOGO_URL} /></Link>
            </div>
            <div className='flex items-center text-3xl text-slate-600 italic font-semibold'>
                <h1>Savory Swift</h1>
            </div>
            <div className="flex items-center text-slate-800 text-[18px]">
                <ul className='flex p-2 m-4 font-medium'>
                    {/* <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li> */}
                    <li className='px-4'><Link to={"/grocery"}>Grocery</Link></li>
                    <li className='px-4'><Link to={"/about"}>About Us</Link></li>
                    <li className='px-4'><Link to={"/contact"}>Contact Us</Link></li>
                    <li className='px-4'><Link to={"/help"}>Help</Link></li>
                    <li className='px-4 text-xl'><Link to={"/cart"}>🛒 [{cartItems.length}]</Link></li>
                    <button className='login' onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                    {/* <li className='px-4 text-xl'>{loggedInUser}</li> */}
                </ul>
            </div>
        </div>
    )
};

export default Header;