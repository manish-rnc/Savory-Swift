import { CDN_URL } from "../utils/constants";

const CartList = ({ items }) => {

    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.card.info.id} className="p-1 m-1 border-2 rounded-lg flex justify-between bg-slate-100">
                        <div className="w-9/12">
                            <div className="font-medium text-xl py-3">
                                <span>{item.card.info.name}</span>
                                <span> - ₹{item.card.info.price / 100}</span>
                            </div>
                            <p className="text-sm font-normal">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <img src={CDN_URL + item.card.info.imageId} className="w-full h-28" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default CartList;
