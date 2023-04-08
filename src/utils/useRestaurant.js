import {useEffect, useState} from 'react'

const useRestaurant = (setFilteredrestaurants)=>{
    const [restaurants,setRestaurants] = useState([]);
    useEffect(()=>{
        getData();
      },[])
    
      // api calling
      async function getData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const jsondata = await data.json();
        const OrignalData = (jsondata?.data?.cards[2]?.data?.data?.cards);
        setRestaurants(OrignalData);
        setFilteredrestaurants(OrignalData);
      }
    return restaurants;
}
export default useRestaurant;