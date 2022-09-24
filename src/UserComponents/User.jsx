import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import Admin from "./Admin";
import NormalUser from "./NormalUser";

function User() {
  const { getUser, name, role, userEmail } = useUser();

  const fetchUser = async () => {
    const local = JSON.parse(localStorage.getItem("token"));

    await getUser(local);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {role === 'admin' ? (
        <Admin name={name} userEmail={userEmail} role={role} />
      ) : (
        <NormalUser name={name} userEmail={userEmail} role={role} />
      )}
    </div>
  );
}

export default User;
