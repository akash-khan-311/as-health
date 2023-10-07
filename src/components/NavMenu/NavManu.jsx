import React, { useContext, useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import {
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import "./NavMenu.css";
import { AuthContext } from "../../ContextApi/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const NavManu = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="lg" className="p-1 font-normal">
        <NavLink to={"/"} className="flex items-center  nav">
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="lg" className="p-1 font-normal">
        <NavLink to={"/pricing"} className="flex items-center nav">
          Pricing
        </NavLink>
      </Typography>
      <Typography as="li" variant="lg" className="p-1 font-normal">
        <NavLink to={"/dashboard"} className="flex items-center nav">
          Dashboard
        </NavLink>
      </Typography>
      <Typography as="li" variant="lg" className="p-1 font-normal">
        <NavLink to={"/blogs"} className="flex items-center nav">
          Blogs
        </NavLink>
      </Typography>
      <Typography as="li" variant="lg" className="p-1 font-normal">
        <NavLink to={"/contact"} className="flex items-center nav">
          Contact
        </NavLink>
      </Typography>
    </ul>
  );

  const handleLogOut = () => {
    logOut()
      .then((result) => toast.success("Log Out Successfully"))
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="  top-0 text-white py-2 px-4 lg:px-0  lg:py-4 ">
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" container mx-auto flex items-center justify-between ">
        <Typography
          as="a"
          className="mr-4 cursor-pointer py-1.5 font-bold font-custom text-4xl"
        >
          <Link to={"/"}>
            <span className="text-color">AS</span> Health
          </Link>
        </Typography>
        <div className="hidden lg:block ">{navList}</div>
        {user ? (
          <>
            <p className=" items-center hidden lg:flex">
              <Button variant="gradient" size="sm" className="capitalize text-xl">
                {user.displayName}
              </Button>
              <Tooltip
                content="Log Out"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <p>
                  <FaSignOutAlt
                    onClick={handleLogOut}
                    className="text-4xl ml-4 cursor-pointer"
                  />
                </p>
              </Tooltip>
            </p>
          </>
        ) : (
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <Link className="hover:underline" to={"/login"}>
              Login
            </Link>{" "}
            /{" "}
            <Link className="hover:underline" to={"/register"}>
              Register
            </Link>
          </Button>
        )}

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          {user ? (
            <>
              <Button variant="gradient" size="sm" fullWidth className="mb-2">
                {user.displayName}
              </Button>
              <Button
                onClick={handleLogOut}
                variant="gradient"
                size="sm"
                fullWidth
                className="mb-2"
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="gradient" size="sm" fullWidth className="mb-2">
                <Link to={"/login"}>Login</Link>
              </Button>
              <Button variant="gradient" size="sm" fullWidth className="mb-2">
                <Link to={"/register"}>Register</Link>
              </Button>
            </>
          )}
        </div>
      </MobileNav>
    </div>
  );
};

export default NavManu;
