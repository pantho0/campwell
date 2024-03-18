import { Button } from "@material-tailwind/react";

const OrganizerMenu = () => {
  return (
    <div className="flex flex-col w-full gap-4 px-2 py-2">
      <Button className="py-6 bg-green-500 hover:bg-green-600">Organizer Profile Management</Button>
      <Button className="py-6 bg-green-500 hover:bg-green-600">Add A Camp</Button>
      <Button className="py-6 bg-green-500 hover:bg-green-600">Manage Camps</Button>
      <Button className="py-6 bg-green-500 hover:bg-green-600">Manage Registered Camps</Button>
    </div>
  );
};

export default OrganizerMenu;
