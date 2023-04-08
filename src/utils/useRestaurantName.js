// import { useParams } from "react-router-dom";
// import { useEffect,useState } from "react";

// const useRestaurantName = ()=>{
//     const resId = useParams();
//     // console.log(resId)
//     const [restaurant,setRestaurant] = useState([]);
//     const [restaurantName,setRestaurantName] = useState('');

//     useEffect(()=>{
//         getRestaurantData();
//     },[])
//     async function getRestaurantData(){
//         const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`);
//         const json = await data.json();
//         setRestaurant(json.data)
//         console.log(restaurant)
//     }
// }
// export default useRestaurantName;