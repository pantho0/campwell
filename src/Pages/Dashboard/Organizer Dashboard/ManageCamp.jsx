import { Button, Card, Typography } from "@material-tailwind/react";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import CampUpdateModal from "../../../Components/Modals/Camp Update/CampUpdateModal";
const TABLE_HEAD = [
  "Camp_Name",
  "Camp_Fees",
  "Scheduled_Date_and_Time",
  "Venue_Location",
  "Specialized_Services_Provided",
  "Healthcare_Professionals_in_Attendance",
  "Target_Audience",
  "Participant_Count",
  "Edit",
  "Delete",
];

const ManageCamp = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [campId, setCampId] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const axiosPublic = useAxiosPublic();
  const { email } = useParams();
  const { data: camps = [], isPending, refetch } = useQuery({
    queryKey: ["camps", email],
    queryFn: async () => {
      const { data } = await axiosPublic(`/manage-camp/${email}`);
      return data;
    },
  });

  if (isPending) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <CampUpdateModal
        isOpen={isOpen}
        closeModal={closeModal}
        campId={campId}
        refetch={refetch}
      />
      <div>
        <h4 className="text-center text-bold text-green-800 text-3xl underline mt-4 mb-4">
          Manage Camps
        </h4>
      </div>
      <div>
        <Card className="h-[calc(100vh-15vh)] max-w-[1045px] overflow-scroll">
          <table className="text-center">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {camps.map(
                (
                  {
                    _id,
                    Camp_Name,
                    Camp_Fees,
                    Scheduled_Date_and_Time,
                    Venue_Location,
                    Specialized_Services_Provided,
                    Healthcare_Professionals_in_Attendance,
                    Target_Audience,
                    Participant_Count,
                    Details,
                  },
                  index
                ) => {
                  const isLast = index === camps.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={Camp_Name}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Camp_Name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {Camp_Fees}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {Scheduled_Date_and_Time}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {Venue_Location}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {Specialized_Services_Provided}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {Healthcare_Professionals_in_Attendance}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {Target_Audience}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          {Participant_Count}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          <Button
                            onClick={() => {
                              openModal();
                              setCampId(_id);
                            }}
                            variant="outlined"
                            size="sm"
                            className="hover:bg-green-900 hover:text-white"
                          >
                            <CiEdit size={20} />
                          </Button>
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                        >
                          <Button
                            variant="outlined"
                            size="sm"
                            className="hover:bg-green-900 hover:text-white"
                          >
                            <MdDelete size={20} />
                          </Button>
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default ManageCamp;
