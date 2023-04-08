const ProductDetailShimmer = ()=>{
    return(
        <div className="flex flex-col justify-center items-center mt-20">
            {
                Array(5).fill("").map((item,index)=>
                   <div key={index}>
                      <hr className="border-spacing-0 w-[60%] border-gray-200 cursor-pointer hover:border-red-500     duration-500" />
                      <h1 className=" bg-slate-100 h-24 w-[60%] my-1"></h1>
                    </div>
                    )
            }
        </div>
        
    )
}
export default ProductDetailShimmer;