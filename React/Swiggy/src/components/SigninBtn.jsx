import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../config/fireBaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { addUserData, removeUserData } from "../redux/authSlice";
import { useNavigate } from "react-router";
import UserProfile from "./UserProfile";

const SigninBtn = () => {
  const userData = useSelector((state) => state.authSlice.userData);
  const loginVisible = useSelector((state) => state.toggleSlice.loginToggle);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  async function handleAuth() {
    let data = await signInWithPopup(auth, provider);
    // console.log(data)

    const userData = {
      name: data.user.displayName,
      photo: data.user.photoURL,
      email: data.user.email,
    };
    dispatch(addUserData(userData));
    navigate("/");
  }

  async function handleLogout() {
    await auth.signOut();
    dispatch(removeUserData());
  }
  return (
    <>
      {/* <button className="bg-slate-300 p-5 m-6" onClick={handleAuth}>
        Google login
      </button> */}
      <div>
        <button
          className=" mt-10 w-full text-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3  transition-all duration-300"
          onClick={handleAuth}
        >
          Login with Google
        </button>
        {userData && (
          <button className="bg-red-300 p-5 m-6" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </>
  );
};

export default SigninBtn;
