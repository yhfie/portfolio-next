"use client";

import Icon from "./Icon";

// import { useEffect, useState } from "react";

const Navbar = () => {
      // const [theme, setTheme] = useState("light")

      // const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
      //       if (e.target.checked) {
      //             setTheme("black");
      //       } else {
      //             setTheme("light");
      //       }
      // };

      // useEffect(() => {
      //       if (!theme) return;

      //       localStorage.setItem("theme", theme);
      //       document.documentElement.setAttribute("data-theme", theme);

      //       if (theme === "black") {
      //             document.documentElement.classList.add("black");
      //       } else {
      //             document.documentElement.classList.remove("black");
      //       }
      // }, [theme]);

      return (
            <div className="navbar min-h-0 h-14 pr-7 justify-between bg-base-100 shadow-sm dark:bg-opacity-90 sticky top-0 z-20 border-b-1 border-black">
                  <div className="navbar-start gap-2">
                  <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden rounded-none hover:bg-scarlet-500">
                        <Icon name="menu"/>
                  </div>
                  <ul
                        tabIndex={0}
                        className="menu menu-lg dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow uppercase">
                        <li><a href="#about" className="rounded-none hover:bg-scarlet-500">About</a></li>
                        <li><a href="#exp" className="rounded-none hover:bg-scarlet-500">Experiences</a></li>
                        <li><a href="#tech" className="rounded-none hover:bg-scarlet-500">Technologies</a></li>
                        <li><a href="#projects" className="rounded-none hover:bg-scarlet-500">Projects</a></li>
                  </ul>
                  </div>
                  </div>
                  <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-lg font-semibold uppercase">
                              <li><a href="#about" className="rounded-none hover:bg-scarlet-500">About</a></li>
                              <li><a href="#exp" className="rounded-none hover:bg-scarlet-500">Experiences</a></li>
                              <li><a href="#tech" className="rounded-none hover:bg-scarlet-500">Technologies</a></li>
                              <li><a href="#projects" className="rounded-none hover:bg-scarlet-500">Projects</a></li>
                        </ul>
                  </div>
            </div>
      )
}

export default Navbar