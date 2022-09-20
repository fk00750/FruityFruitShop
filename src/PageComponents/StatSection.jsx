import React from "react";

function StatSection() {
  const bgImg = {
    backgroundImage: `url(/images/arrangefruits.png)`,
    paddingLeft: "0.5rem",
    paddingTop: "4.5rem",
    paddingBottom: "4.5rem",
    textAlign: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const buttonStyle = {
    fontSize: "15px",
    color: "#fff",
    borderColor: "#18ab29",
    fontWeight: "bold",
    borderTopRightRadius: "35px",
    borderBottomLeftRadius: "35px",
    textShadow: "1px 1px 0px #2f6627",
  };

  const numberStyle = {
    borderRadius: "50%",
    height: "35px",
    width: "35px",
  };

  return (
    <div>
      <div>
        <div className="container mx-auto flex items-center justify-between flex-wrap px-2">
          <div className="py-2">
            <img src="public/images/blood_orange.png" alt="" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold font-mono">
              Eat a banana for a Healthy snack
            </h1>
            <p className="text-sm text-gray-700 my-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              corrupti magnam dolores.
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-10">
              <div className="flex flex-col space-y-2">
                <div
                  style={numberStyle}
                  className="border text-center px-2 py-2 font-bold text-green-600 shadow-xl shadow-gray-400"
                >
                  1
                </div>
                <span className="text-2xl font-semibold text-green-600 border-green-600 border-r-0 border-l-0 border-t-0 border-2">
                  150+
                </span>
                <i>Global Franchise</i>
              </div>
              <div className="flex flex-col space-y-2">
                <div
                  style={numberStyle}
                  className="border text-center px-2 py-2 font-bold text-green-600 shadow-xl shadow-gray-400"
                >
                  2
                </div>
                <span className="text-2xl font-semibold text-green-600 border-green-600 border-r-0 border-l-0 border-t-0 border-2">
                  97%
                </span>
                <i>Happy Customer</i>
              </div>
              <div className="flex flex-col space-y-2">
                <div
                  style={numberStyle}
                  className="border text-center px-2 py-2 font-bold text-green-600 shadow-xl shadow-gray-400"
                >
                  3
                </div>
                <span className="text-2xl font-semibold text-green-600 border-green-600 border-r-0 border-l-0 border-t-0 border-2">
                  100%
                </span>
                <i>Organic Product</i>
              </div>
              <div className="flex flex-col space-y-2">
                <div
                  style={numberStyle}
                  className="border text-center px-2 py-2 font-bold text-green-600 shadow-xl shadow-gray-400"
                >
                  4
                </div>
                <span className="text-2xl font-semibold text-green-600 border-green-600 border-r-0 border-l-0 border-t-0 border-2">
                  10M+
                </span>
                <i>Monthly Sales</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatSection;
