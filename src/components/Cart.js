import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartList from "./CartList";
import { Link } from "react-router-dom";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        const confirmation = confirm("Are you sure to clear the cart ?");
        if (!confirmation) {
            return;
        }
        dispatch(clearCart());
    }

    return (
        <div className="m-3 p-4 font-bold text-2xl text-center justify-items-end">
            <div className="flex justify-center">

                <Link to={"/"}>
                    <button
                        className="p-2 m-3 bg-black text-white rounded-lg font-normal text-base"
                    >
                        Add more
                    </button>
                </Link>
                <button
                    className="p-2 m-3 bg-red-600 text-white rounded-lg font-normal text-base"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                <button
                    className="p-2 m-3 bg-green-600 text-white rounded-lg font-normal text-base"
                    onClick={() => {
                        alert("You do not have enough money to buy all these !!!");
                    }}
                >
                    Proceed to Pay
                </button>
            </div>
            <div className="px-72">
                {cartItems.length === 0 && <p className="font-normal text-xl">Cart is empty. Add items to the cart.</p>}
                <CartList items={cartItems} />
            </div>
        </div>
    )
};

export default Cart;
