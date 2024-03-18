import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const OrganizerMenu = () => {
  return (
    <div className="flex flex-col w-full gap-4 px-2 py-2">
      <Button className="py-6 bg-green-500 hover:bg-green-600">Organizer Profile Management</Button>
      <Link to="/dashboard/add-a-camp"><Button className="py-6 w-full bg-green-500 hover:bg-green-600">Add A Camp</Button></Link>
      <Button className="py-6 bg-green-500 hover:bg-green-600">Manage Camps</Button>
      <Button className="py-6 bg-green-500 hover:bg-green-600">Manage Registered Camps</Button>
    </div>
  );
};

export default OrganizerMenu;
