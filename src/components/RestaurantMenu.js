import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);    // custom hook

    const [showIndex, setShowIndex] = useState();

    // kept before as if null then it will not be able to destructure and will give error
    if (resInfo === null) {
        return <Shimmer />
    }

    const { name, cuisines } = resInfo.data.cards[0].card.card.info;
    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

    return (
        <div className="text-center">
            <h1 className="my-6 text-2xl font-bold">{name}</h1>
            <h3 className="font-bold text-xl my-4">
                {cuisines.join(', ')}
            </h3>
            {/* <h2>---------Menu---------</h2>
            {
                itemCards.map((item) => (
                    <div key={item.card.info.id}>
                        <h2 className="font-bold">{item.card.info.name} - ₹ {item.card.info.price / 100}</h2>
                    </div>
                ))
            } */}
            {
                categories.map((category, index) => (
                    <RestaurantCategory
                        key={category.card.card.title}
                        data={category.card.card}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                ))
            }
        </div>
    )
}

export default RestaurantMenu;
