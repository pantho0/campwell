import { useLoaderData } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import RegistrationModal from "../../Components/Modals/Registration/RegistrationModal";
import { useState } from "react";
const CampDetails = () => {
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const camp = useLoaderData();
  const fee = camp?.data?.Camp_Fees
  return (
    <div
      className="px-4 py-24 mx-auto max-w-7xl"
      itemScope
      itemType={camp.data.Image}
    >
      <RegistrationModal isOpen={isOpen}  closeModal={closeModal} fee={fee}/>
      <div className="w-full mx-auto mb-4 text-left md:w-3/4 lg:w-1/2">
        <img
          src="/brand/og.png"
          className="object-cover w-full h-64 bg-center rounded-lg"
          alt="Kutty"
        />
        <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
          Development
        </p>
        <h1
          className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
          itemProp="headline"
          title="Rise of Tailwind - A Utility First CSS Framework"
        >
          {camp.data.Camp_Name}
        </h1>
        <div className="flex flex-col mb-6 text-gray-700">
          <a className="badge hover:bg-gray-200" href="#">
            Fee : {camp.data.Camp_Fees}
          </a>
          <a className="badge hover:bg-gray-200" href="#">
            Date And Time : {camp.data.Scheduled_Date_and_Time}
          </a>
          <a className="badge hover:bg-gray-200" href="#">
            Venu/Location : {camp.data.Venue_Location}
          </a>
          <a className="badge hover:bg-gray-200" href="#">
            Targeted Audience : {camp.data.Target_Audience}
          </a>
          <a className="badge hover:bg-gray-200" href="#">
            Health Care Professionals :{" "}
            {camp.data.Healthcare_Professionals_in_Attendance.join(", ")}
          </a>
        </div>
        <hr className="" />
      </div>
      <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
        <p className="my-4">{camp.data.Details}</p>
        <hr className="my-4" />
        <div className="flex justify-center">
          <Button onClick={openModal} variant="outlined" className="border-green-700 hover:bg-green-900 hover:text-white">Join Camp</Button>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
