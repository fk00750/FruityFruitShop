import React from "react";

function NormalUser({ name, userEmail, role }) {
  return (
    <div>
      <section className="flex flex-col items-center">
        <img src="/images/avatar.png" alt="" />
        <div className="flex flex-col">
          <h1>Customer</h1>
          <div className="border border-gray-400 bg-gray-200 rounded text-center text-lg my-4 py-2">
            <span className="mx-4">{name}</span>
          </div>
          <div className="border border-gray-400 bg-gray-200 rounded text-center text-lg my-4 py-2">
            <span className="mx-4">{userEmail}</span>
          </div>
        </div>
        <button className="border border-black bg-red-500 px-4 py-2 text-white rounded-md">
          LogOut
        </button>
      </section>
    </div>
  );
}

export default NormalUser;
