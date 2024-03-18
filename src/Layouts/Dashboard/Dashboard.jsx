import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Tooltip,
} from "@material-tailwind/react";
import { HiHome, HiOutlineLogout, HiMenu  } from "react-icons/hi";
import { useState } from "react";
import Container from "../../Components/Utils/Container";
import { Outlet } from "react-router-dom";
import OrganizerMenu from "../../Components/Dashboard/OrganizerMenu";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <>
      <Container>
        <div className="lg:hidden">
          <div className="w-full bg-green-700">
            <Button className="rounded-none" onClick={openDrawer}><HiMenu/></Button>
          </div>

          <Drawer className="bg-green-700" open={open} onClose={closeDrawer}>
          <div className="min-h-screen">
            <div>
              <h6 className="text-3xl font-semibold text-white text-center  mb-5">CAMPWELL</h6>
              <hr />
              <div className="flex justify-center gap-3 mb-5 mt-5">
                <Tooltip content="Home"><Button className="bg-green-400 hover:bg-green-500"><HiHome size={30} color="white" className="cursor-pointer"/></Button></Tooltip>
                <Tooltip content="Logout"><Button className="bg-green-400 hover:bg-green-500"><HiOutlineLogout size={30} color="white" className="cursor-pointer"/></Button></Tooltip>
              </div>
              <hr className="mb-5"/>
            </div>
            <OrganizerMenu/>
        </div>
          </Drawer>
        </div>
      </Container>
      <div className=" gap-2 hidden lg:block lg:flex">
        <div className="min-h-screen w-72 bg-green-700">
            <div>
              <h6 className="text-3xl font-semibold text-white text-center mt-5 mb-5">CAMPWELL</h6>
              <hr />
              <div className="flex justify-center gap-3 mb-5 mt-5">
                <Tooltip content="Home"><Button className="bg-green-400 hover:bg-green-500"><HiHome size={30} color="white" className="cursor-pointer"/></Button></Tooltip>
                <Tooltip content="Logout"><Button className="bg-green-400 hover:bg-green-500"><HiOutlineLogout size={30} color="white" className="cursor-pointer"/></Button></Tooltip>
              </div>
              <hr className="mb-5"/>
            </div>
            <OrganizerMenu/>
        </div>
        <div>
            <Outlet/>
            
        </div>
      </div>
    </>
  );
};

export default Dashboard;
