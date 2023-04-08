import Loading from "./Loading";
import { Link, useParams } from "react-router-dom";
import useRestaurantData from "../utils/useRestaurantData";
import ProductDetailShimmer from "./ShimmerProductDetail";
// import useRestaurantName from "../utils/useRestaurantName";
// import  LOGO_IMG_URL  from "../Constant";



const RestaurantDetails = () => {
  const url =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/";
  const restaurantData = useRestaurantData();

  return restaurantData?.length === 0 ? (
    <ProductDetailShimmer />
  ) : (
    <>
      <h1 className="flex justify-center items-center mt-2 font-bold text-2xl">
        Food Recipes here 😊
      </h1>
      {/* <div className="flex flex-wrap justify-center mt-5"> */}

      {restaurantData?.map((data, index) => {
        return (
          <div
            className="flex flex-col justify-center items-center mt-5 w-full"
            key={index}
          >
            {data?.card?.card?.itemCards?.map((item) => {
              return (
                <div key={item?.card?.info?.id}>

                  <hr className="border-spacing-0 my-2 w-[95%] border-gray-200 cursor-pointer hover:border-red-500 duration-500" />

                  <div className="flex  my-1 w-[60vw] ">
                    <div className="flex flex-col  justify-evenly w-[45vw]  h-36 ">
                      <h3 className="text-sm text-yellow-500 font-bold">
                        {"⭐ Bestseller"}
                      </h3>
                      <Link to={`productdetail/${item?.card?.info?.id}`}>
                        <h2 className="text-base  font-bold hover:text-gray-600">
                          {item.card.info.name}
                        </h2>
                      </Link>
                      <h2 className="text-sm my-1">
                        {"₹"+item?.card?.info?.price?.toString()?.slice(0,3)}
                      </h2>
                      <h2 className="flex flex-wrap text-sm  text-gray-400">
                        {item?.card?.info?.description}
                      </h2>
                    </div>
                    <div className="flex flex-wrap flex-col justify-center items-center w-28">
                    <Link to={`productdetail/${item?.card?.info?.id}`}>
                      <img
                        className="w-24 ml-14 rounded-md hover:cursor-pointer"
                        alt="true"
                        src={url + item?.card?.info?.imageId}
                      />
                      </Link>
                      <button className="ml-24 bg-white w-20 h-8 text-green-500 font-bold  border border-gray-300 -mt-3 rounded-sm  text-sm">
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      {/* </div> */}
    </>
  );
};

export default RestaurantDetails;
