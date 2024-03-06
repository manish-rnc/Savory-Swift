import { CDN_URL } from "../utils/constants";

// props is like an argument to a function and it is a JS object
// destructuring can also be done here  = ({resName, cuisines, rating}) => {
const RestaurantCard = (props) => {

    // const {resName, cuisines, rating} = props;
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info;

    return (
        <div className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:shadow-2xl">
            <img
                className="rounded-lg h-44 w-60"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-3 text-lg">{name}</h3>              {/* or like {props,resName} if destructuring is not done*/}
            <h4>{cuisines.join(', ')}</h4>
            <p className="font-medium ">{avgRating} ★</p>
            <p className="font-medium">{sla.slaString}</p>
            <p>{costForTwo}</p>
        </div>
    )
};


export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-600 text-white m-2 p-[5px] rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};


export default RestaurantCard;