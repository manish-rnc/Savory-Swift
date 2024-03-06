import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    function handleClick() {
        setShowIndex();
    }
 
    return (
        <div>
            {/* Header */}
            <div className="mx-80 my-4 p-4 bg-gray-100 shadow-lg rounded-md text-left">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>&nbsp;🠋</span>
                </div>
                {/* Accordian Body */}
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
};

export default RestaurantCategory;
