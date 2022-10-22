import React from "react";

function ProductsGallery() {
  return (
    <div className=" flex mx-2 items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-3 px-2 py-2 mx-2 xl:mx-24 xl:align-center   xl:w-3/5">
        <img
          className="h-full border xl:border-l-0 xl:border-t-0 border-l-0 border-t-0 w-full"
          src="/images/appleView.png"
          alt=""
        />
        <img
          className="h-full border xl:border-t-0 xl:border-r md:border-r border-r-0 border-t-0"
          src="/images/mangoView.png"
          alt=""
        />
        <img
          className="h-full border xl:border-t-0 xl:border-r-0 border-l-0"
          src="/images/grapeView.png"
          alt=""
        />
        <img
          className="h-full border border-l-0 border-b-0 border-r-0"
          src="/images/leechiView.png"
          alt=""
        />
        <img
          className="h-full border border-b-0"
          src="/images/papayaView.png"
          alt=""
        />
        <img
          className="h-full border border-r-0 border-b-0"
          src="/images/bananaView.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default ProductsGallery;
