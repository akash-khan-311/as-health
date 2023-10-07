import React from "react";
import {
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavManu = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="lg" className="p-1 font-normal">
        <NavLink to={"/"} className="flex items-center">
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="lg" className="p-1 font-normal">
        <NavLink to={"/about"} className="flex items-center">
          About
        </NavLink>
      </Typography>
      <Typography as="li" variant="lg" className="p-1 font-normal">
        <NavLink to={"/contact"} className="flex items-center">
          Contact
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className=" text-white py-2 px-4 lg:px-0  lg:py-4">
      <div className=" container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          className="mr-4 cursor-pointer py-1.5 font-bold font-custom text-4xl"
        >
          <Link to={"/"}>
            <span className="text-color">AS</span> Event
          </Link>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button variant="gradient" size="sm" className="hidden lg:inline-block">
          <Link className="hover:underline" to={"/login"}>
            Login
          </Link>{" "}
          /{" "}
          <Link className="hover:underline" to={"/register"}>
            Register
          </Link>
        </Button>
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
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </div>
  );
};

export default NavManu;
