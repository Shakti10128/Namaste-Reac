import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const useRestaurantData = ()=>{
    const {resId} = useParams();
    const [restaurantData,setRestaurantData] = useState([]);
    useEffect(()=>{
        getRestaurantData();
    },[])

    async function getRestaurantData(){
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`);
        const json = await data.json();
        setRestaurantData(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }
    return restaurantData;
}
export default useRestaurantData;