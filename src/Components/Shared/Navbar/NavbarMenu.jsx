import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Container from "../../Utils/Container";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

function NavList() {
  const { logOut, user } = useAuth();

  const logOutAlert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Login Succeed",
      background: "#1B5E20",
      color: "#fff",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleLogout = () => {
    logOut();
    logOutAlert();
  };

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          to="/"
          className="flex items-center hover:text-green-500 transition-colors"
        >
          Home
        </Link>
      </Typography>

      {!user ? (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Link
              to="/login"
              className="flex items-center hover:text-green-500 transition-colors"
            >
              Login
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Link
              to="/signup"
              className="flex items-center hover:text-green-500 transition-colors"
            >
              Signup
            </Link>
          </Typography>
        </>
      ) : (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Link
              to="/available-camps"
              className="flex items-center hover:text-green-500 transition-colors"
            >
              Available Camps
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Link
              to="/dashboard"
              className="flex items-center hover:text-green-500 transition-colors"
            >
              Dashboard
            </Link>
          </Typography>
        </>
      )}

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center hover:text-green-500 transition-colors"
        >
          Contact Us
        </a>
      </Typography>
      {user && (
        <Menu>
          <MenuHandler>
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              size="sm"
            />
          </MenuHandler>
          <MenuList>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      )}
    </ul>
  );
}

export default function NavbarMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="shadow-lg">
      <Container>
        <Navbar className="px-6 py-3 rounded-none shadow-none">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              variant="h6"
              className="mr-4 cursor-pointer text-2xl font-bold text-green-900 py-1.5"
            >
              CampWell
            </Typography>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList />
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
