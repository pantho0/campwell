import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CampCard = ({ camp }) => {
  console.log(camp);
  return (
    <div>
      <Card className="w-[375px]">
        <CardHeader shadow={false} floated={false} className="h-56">
          <img src={camp?.Image} className="object-cover" />
        </CardHeader>
        <CardBody className="h-96">
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {camp?.Camp_Name}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              Price:{camp?.Camp_Fees}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {camp?.Details.slice(0, 90) + "....."}
          </Typography>
          <div className="py-4">
          <hr />
          </div>
          <Typography
            variant="small"
            color=""
            className="opacity-75 text-gray-800 "
          >
           Specialized Services: {camp?.Specialized_Services_Provided}
          </Typography>
          <Typography
            variant="small"
            color=""
            className="opacity-75 text-gray-800 "
          >
           Specialized Services: {camp?.Healthcare_Professionals_in_Attendance.join(', ')}
          </Typography>
          <Typography
            variant="small"
            color=""
            className="opacity-75 text-gray-800 "
          >
           Targeted Audience: {camp?.Target_Audience}
          </Typography>
          <div className="py-4">
          <hr />
          </div>
          <Typography
            variant="small"
            color=""
            className="opacity-75 text-gray-800 "
          >
           Location: {camp?.Venue_Location}
          </Typography>
          <Typography
            variant="small"
            color=""
            className="opacity-75 text-gray-800 "
          >
           Date & Time: {camp?.Scheduled_Date_and_Time}
          </Typography>
          <Typography
            variant="small"
            color=""
            className="opacity-75 text-gray-800 "
          >
           Total Participants: {camp?.Participant_Count}
          </Typography>
          
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 hover:bg-green-900 hover:text-white"
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CampCard;
