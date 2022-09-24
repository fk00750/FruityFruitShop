import React from "react";

function ProductsGallery() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:grid-cols-3 px-2 py-2 mx-2 xl:mx-24 xl:align-center">
        <img className="h-full shadow-lg" src="/images/appleView.png" alt="" />
        <img className="h-full shadow-lg" src="/images/mangoView.png" alt="" />
        <img className="h-full shadow-lg" src="/images/grapeView.png" alt="" />
        <img className="h-full shadow-lg" src="/images/leechiView.png" alt="" />
        <img className="h-full shadow-lg" src="/images/papayaView.png" alt="" />
        <img className="h-full shadow-lg" src="/images/bananaView.png" alt="" />
      </div>
    </div>
  );
}

export default ProductsGallery;
