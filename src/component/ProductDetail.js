import { useParams} from "react-router-dom"
import { useState,useEffect } from "react";
import useRestaurantData from "../utils/useRestaurantData";
import Loading from "./Loading";

const ProductDetail = ()=>{
    const url = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/'
    const {resId,id} = useParams();
    
    const restaurantData = useRestaurantData();
    return restaurantData?.length===0?<Loading/>:(
        <div className="bg-slate-200">
            {
                restaurantData?.map((data,index)=>{
                    return <div className="flex flex-row justify-start mt-5" key={index}>
                        {
                            data?.card?.card?.itemCards?.map((item)=>{
                            if(item?.card?.info?.id === id){
                            return <div className="flex flex-col justify-center items-center rounded-xl bg-zinc-400 h-80 w-80 ml-72 " key={item?.card?.info?.id}>
                                <img className="w-48 rounded-2xl hover:scale-125  ease-in-out duration-[0.5s]" alt="true" src=            {url + item?.card?.info?.imageId} />
                                <h2 className="self-start ml-16">{item?.card?.info?.name}</h2>
                                <h3 className="self-start ml-16">{"Category - "+item?.card?.info?.category}</h3>
                                <h3 className="self-start ml-16 text-red-800">{"Price: ₹"+item?.card?.info?.price}</h3>
                                <h4 className="text-white self-start ml-16">{data?.card?.info?.ratings?.aggregatedRating?.rating + "⭐"}</h4>
                            </div>
                            }
                            })
                        }
                    </div>
                })
            }
            {/* {
                restaurantData?.map((data)=>{
                    if(data?.card?.info?.id === id){
                    return <div className="flex flex-col justify-center items-center rounded-xl bg-zinc-400 h-80 w-80 ml-72 " key={data?.card?.info?.id}>
                    <img className="w-48 rounded-2xl hover:scale-125  ease-in-out duration-[0.5s]" alt="true" src={url + data?.card?.info?.imageId} />
                    <h2 className="self-start ml-16">{data?.card?.info?.name}</h2>
                    <h3 className="self-start ml-16">{"Category - "+data?.card?.info?.category}</h3>
                    <h3 className="self-start ml-16 text-red-800">{"Price: ₹"+data?.card?.info?.price}</h3>
                    <h4 className="text-white self-start ml-16">{data?.card?.info?.ratings?.aggregatedRating?.rating + "⭐"}</h4>
                   </div>
                  }
                })
            } */}
        </div>
    )
}

export default ProductDetail