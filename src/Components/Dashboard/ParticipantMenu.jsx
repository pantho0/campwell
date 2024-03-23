import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const ParticipantMenu = () => {
    const {user} = useAuth()
  return (
    <div className="flex flex-col w-full gap-4 px-2 py-2">
      <Button className="py-6 bg-green-500 hover:bg-green-600">
        Profile Management
      </Button>
      <Link to="/dashboard/registered-camps">
        <Button className="py-6 w-full bg-green-500 hover:bg-green-600">
          Registered Camps
        </Button>
      </Link>
      <Link to={`#`}>
        <Button className="py-6 w-full bg-green-500 hover:bg-green-600">
          Payment History
        </Button>
      </Link>
      <Button className="py-6 bg-green-500 hover:bg-green-600">
        Feedback and Ratings
      </Button>
    </div>
  );
};

export default ParticipantMenu;
