import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../config/fireBaseAuth";
import { removeUserData } from "../redux/authSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.authSlice.userData);

  async function handleLogout() {
    await auth.signOut();
    dispatch(removeUserData());
  }

  if (!userData) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white w-[90%] sm:w-[380px] rounded-xl shadow-lg p-8 text-center">
        {/* Profile Image */}
        <img
          src={userData.photo}
          alt="User Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border"
        />

        {/* Name */}
        <h1 className="text-xl font-semibold text-gray-800">{userData.name}</h1>

        {/* Email */}
        <p className="text-sm text-gray-500 mt-1">{userData.email}</p>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full text-lg bg-orange-500 hover:bg-orange-600
                     text-white font-semibold py-3 rounded-lg
                     transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
