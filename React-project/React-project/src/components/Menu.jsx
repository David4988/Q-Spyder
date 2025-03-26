import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <aside>
      <ul className="flex gap-3 font-semibold">
        <li>
          <NavLink
            to="/"
            className={(obj) => {
              let { isActive } = obj;
              return `py-2 px-4 rounded-lg hover:cursor-pointer hover:bg-purple-700 ${
                isActive && "bg-purple-500"
              }`;
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth/login"
            className={(obj) => {
              let { isActive } = obj;
              return `py-2 px-4 rounded-lg hover:cursor-pointer hover:bg-purple-700 ${
                isActive && "bg-purple-500"
              }`;
            }}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth/register"
            className={(obj) => {
              let { isActive } = obj;
              return `py-2 px-4 rounded-lg hover:cursor-pointer hover:bg-purple-700 ${
                isActive && "bg-purple-500"
              }`;
            }}
          >
            Register
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;