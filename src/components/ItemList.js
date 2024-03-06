import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {
                items.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-b-2 flex justify-between">
                        <div className="w-9/12">
                            <div className="font-medium py-2">
                                <span>{item.card.info.name}</span>
                                <span> - ₹{item.card.info.price / 100}</span>
                            </div>
                            <p className="text-sm">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button
                                    className="p-1 mx-1 mt-1 bg-black text-white shadow-lg rounded-lg font-medium text-sm hover:bg-slate-800"
                                    onClick={() => handleAddItem(item)}>
                                    Add +
                                </button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} className="w-full h-28" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default ItemList;
