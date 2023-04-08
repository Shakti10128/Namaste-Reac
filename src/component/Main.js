import {useState } from "react";
import { restrautList } from "../Constant";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { SEARCH_BUTTON_URL } from "../Constant";
import useRestaurant from "../utils/useRestaurant";

// data filtering
function FilterData(inputText,restaurants){
  const filterData = restaurants.filter((restaurants)=>restaurants?.data?.name?.toLowerCase().includes(inputText.toLowerCase()));
  return filterData;
}

const Main = () => {
  const [Filteredrestaurants,setFilteredrestaurants] = useState(restrautList);
  const [inputText,setInputText] = useState("");

  const restaurants = useRestaurant(setFilteredrestaurants);
  
// Search value of input 
  const SearchValue = (e)=>{
    setInputText(e.target.value);
  }

    return restaurants?.length === 0? <Loading/>: (
      <>
      <div className="my-5 flex row items-center justify-center">
        <input className="w-1/4 h-8 items-center border border-orange-400 rounded-md focus:outline-none focus:border-orange-700"
         placeholder="Search" value={inputText} onChange={(e)=>SearchValue(e)}/>

        <button 
        onClick={()=>
       { const data = FilterData(inputText,restaurants)
        setFilteredrestaurants(data)
       }}>
        <img src={SEARCH_BUTTON_URL} alt="" className="w-8 ml-2"/>
        </button>
      </div>
        <div className="flex flex-wrap justify-center">
          {
            Filteredrestaurants?.map((restaurant)=>(
              <Link to={`/restaurant/${restaurant?.data?.id}`} key={restaurant?.data?.id}> <div 
              className="w-60 m-3 shadow-md h-72 hover:scale-105  ease-in-out duration-[0.5s]" >
                     <img alt="true" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${restaurant?.data?.cloudinaryImageId}`}/>
                     <h2 className="text-lg mt-2">{restaurant?.data?.name}</h2>
                     <h3 className="text-sm text-red-400 mt-1">{restaurant?.data?.cuisines[0]}</h3>
                     <h4 className="text-red-700 text-sm mt-1">4.5 Star</h4>
                 </div>
                </Link>
              ))
          }
        </div>
      </>
    );
};

export default Main;