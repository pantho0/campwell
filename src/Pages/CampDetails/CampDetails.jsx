import { useLoaderData } from "react-router-dom";

const CampDetails = () => {
  const camp = useLoaderData();

  return (
    <div
      className="px-4 py-24 mx-auto max-w-7xl"
      itemScope
      itemType={camp.data.Image}
    >
      <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
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
          Health Care Professionals : {camp.data.Healthcare_Professionals_in_Attendance.join(", ")}
          </a>
          
        </div>
        <hr className="mb-2" />
      </div>
      <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
        <p className="my-4">{camp.data.Details}</p>
        <hr className="my-4" />

      </div>
    </div>
  );
};

export default CampDetails;
