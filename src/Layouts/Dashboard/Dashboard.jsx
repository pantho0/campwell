import { Drawer, Button, Tooltip } from "@material-tailwind/react";
import { HiHome, HiOutlineLogout, HiMenu } from "react-icons/hi";
import { useState } from "react";
import Container from "../../Components/Utils/Container";
import { Link, Outlet } from "react-router-dom";
import OrganizerMenu from "../../Components/Dashboard/OrganizerMenu";
import useAuth from "../../Components/Hooks/useAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
import ParticipantMenu from "../../Components/Dashboard/ParticipantMenu";

const Dashboard = () => {
  const { logOut, user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const userEmail = user?.email;
  const { data: loggedUser = "" } = useQuery({
    queryKey: ["loggedUser", userEmail],
    queryFn: async () => {
      const { data } = await axiosPublic(`/get-user/${userEmail}`);
      return data;
    },
  });

  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
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
    <>
      <Container>
        <div className="lg:hidden">
          <div className="w-full bg-green-700">
            <Button className="rounded-none" onClick={openDrawer}>
              <HiMenu />
            </Button>
          </div>

          <Drawer className="bg-green-700" open={open} onClose={closeDrawer}>
            <div className="min-h-screen">
              <div>
                <h6 className="text-3xl font-semibold text-white text-center  mb-5">
                  CAMPWELL
                </h6>
                <hr />
                <div className="flex justify-center gap-3 mb-5 mt-5">
                  <Link to="/">
                    <Tooltip content="Home">
                      <Button className="bg-green-400 hover:bg-green-500">
                        <HiHome
                          size={30}
                          color="white"
                          className="cursor-pointer"
                        />
                      </Button>
                    </Tooltip>
                  </Link>
                  <Tooltip content="Logout">
                    <Button
                      onClick={handleLogout}
                      className="bg-green-400 hover:bg-green-500"
                    >
                      <HiOutlineLogout
                        size={30}
                        color="white"
                        className="cursor-pointer"
                      />
                    </Button>
                  </Tooltip>
                </div>
                <hr className="mb-5" />
              </div>
              {loggedUser && loggedUser.role === "Organizer" ? (
                <OrganizerMenu />
              ) : (
                ""
              )}
             
             {loggedUser && loggedUser.role === "Participant" ? (
                <ParticipantMenu />
              ) : (
                ""
              )}
            </div>
          </Drawer>
        </div>
      </Container>
      <div className=" gap-2 hidden lg:block lg:flex">
        <div className="min-h-screen w-72 bg-green-700">
          <div>
            <h6 className="text-3xl font-semibold text-white text-center mt-5 mb-5">
              CAMPWELL
            </h6>
            <hr />
            <div className="flex justify-center gap-3 mb-5 mt-5">
              <Link to="/">
                <Tooltip content="Home">
                  <Button className="bg-green-400 hover:bg-green-500">
                    <HiHome
                      size={30}
                      color="white"
                      className="cursor-pointer"
                    />
                  </Button>
                </Tooltip>
              </Link>
              <Tooltip content="Logout">
                <Button
                  onClick={handleLogout}
                  className="bg-green-400 hover:bg-green-500"
                >
                  <HiOutlineLogout
                    size={30}
                    color="white"
                    className="cursor-pointer"
                  />
                </Button>
              </Tooltip>
            </div>
            <hr className="mb-5" />
          </div>
          {loggedUser && loggedUser.role === "Organizer" ? (
            <OrganizerMenu />
          ) : (
            ""
          )}
          {loggedUser && loggedUser.role === "Participant" ? (
                <ParticipantMenu />
              ) : (
                ""
              )}
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
