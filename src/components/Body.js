import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from 'react';
import resList from "../utils/sampleData";
import Shimmer from "./Shimmer";
import { RESTAURANT_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredList, setFilteredList] = useState([]);

    const [searchText, setSearchText] = useState('');

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const { loggedInUser, setUserName } = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_URL);
        const json = await data.json();

        const tempData = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

        setListOfRestaurants(tempData);
        setFilteredList(tempData);

    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <h1 className="m-8 p-8 font-bold text-3xl">Hey buddy ! Seems you are offline. Please Check your internet connection</h1>
        )
    }

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div>
            <div className="flex">
                <div className="m-1 p-4">
                    <input
                        type="text"
                        className="px-2 py-1 border border-solid border-black"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button className="px-4 py-2 m-4 bg-green-100 rounded-lg hover:shadow-md" onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredList(filteredRestaurant);
                    }}>
                        Search
                    </button>
                </div>

                <div className="m-1 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg hover:shadow-md"
                        onClick={() => {
                            const filteredRes = listOfRestaurants.filter((res) => (
                                res.info.avgRating >= 4.5
                            ))
                            setFilteredList(filteredRes);
                        }}>Top Rated Restaurants
                    </button>
                </div>

                {/* <div className="m-1 p-4 flex items-center">
                    <label>Username : &nbsp;</label>
                    <input className="bg-slate-100 rounded-md py-1" onChange={(e) => {
                        setUserName(e.target.value);
                    }}/>
                </div> */}
            </div>


            <div className="flex flex-wrap">
                {
                    filteredList.map((res) => (
                        <Link
                            key={res.info.id}
                            to={'/restaurants/' + res.info.id}
                        >
                            {res.info.avgRating >= 4.5 ? (
                                <RestaurantCardPromoted resData={res} />
                            ) : (
                                <RestaurantCard resData={res} />
                            )}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
};

export default Body;
