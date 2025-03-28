import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContextAPI } from "../context/AuthContext";
import LoginRegister from "../components/navbar/LoginRegister";
import Logout from "../components/navbar/Logout";
import ProfilePic from "../components/profilePic";

const Menu = () => {
  let {authUser} = useContext(AuthContextAPI)
  return (
    <aside>
      <ul className="flex gap-3 font-semibold">
        <li>
          <NavLink
            to="/"
            className={(obj) => {
              let { isActive } = obj;
              return `py-2 px-4 rounded-lg hover:cursor-pointer hover:bg-purple-700 text-white  ${
                isActive && "bg-purple-500 text-white"
              }`;
            }}
          >
            Home
          </NavLink>
        </li>
        {/* <li><NavLink>{authUser.photoUrl}</NavLink></li> */}
        {/* //! Use Conditional Rendering and display Login/ Register only when authUser info is NULL */}
        {(authUser)?
         <>
          <Logout />
          <ProfilePic />
         </>
          :<LoginRegister />}
        
      </ul>
    </aside>
  );
};

export default Menu;