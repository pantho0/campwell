import { Button } from "@material-tailwind/react";

const OrganizerMenu = () => {
  return (
    <div className="flex flex-col w-full gap-4 px-2 py-2">
      <Button color="amber">Organizer Profile Management</Button>
      <Button color="amber">Add A Camp</Button>
      <Button color="amber">Manage Camps</Button>
      <Button color="amber">Manage Registered Camps</Button>
    </div>
  );
};

export default OrganizerMenu;
