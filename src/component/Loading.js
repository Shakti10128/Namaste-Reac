import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {
        Array(25).fill("").map((item,index)=>
          <div className="w-60 h-72 m-3 bg-slate-200" key={index}>
          </div>
        )
      }
    </div>
  )
}

export default Loading