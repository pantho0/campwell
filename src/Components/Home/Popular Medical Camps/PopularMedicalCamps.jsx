import Container from "../../Utils/Container";
import img1 from "../../../../src/assets/images/1.jpg"
import { useEffect, useState } from "react";
const PopularMedicalCamps = () => {
    const [camps, setCamps] = useState([])
    useEffect(()=>{
        fetch('popularmedicalcamps.json')
        .then(res=>res.json())
        .then(data=>setCamps(data))
    },[])
  return (
    <Container>
      <div className="mt-16">
        <h3 className="text-3xl text-center font-bold text-gray-800">
          Popular Medical Camps
        </h3>
        <div>
          <div className="px-4 py-16 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {
                camps.map(camp=><div key={camp.Camp_Name}>
                    <a href="#">
                      <img
                        src={camp?.Image}
                        className="object-cover w-full h-56 mb-5 bg-center rounded"
                        alt="Kutty"
                        loading="lazy"
                      />
                    </a>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                      <a href="#" className="text-green-900 hover:text-purple-700">
                       {camp?.Camp_Name}
                      </a>
                    </h2>
                    <p className="mb-3 text-sm font-normal text-gray-700 text-justify">
                      {camp?.Details}
                    </p>
                    <p className="mb-1 text-sm font-normal text-gray-500">
                      <a
                        href="#"
                        className="text-green-900 font-bold hover:text-purple-700 text-justify"
                      >
                        Specialized Service: {camp?.Specialized_Services_Provided}
                      </a>
                    </p>
                    <p className="mb-1 text-sm font-normal text-gray-500">
                      <a
                        href="#"
                        className="text-green-900 font-bold hover:text-purple-700 text-justify"
                      >
                        Target Audience: {camp?.Target_Audience}
                      </a>
                    </p>
                    <p className="mb-1 text-sm font-normal text-gray-500">
                      <a
                        href="#"
                        className="text-green-900 font-bold hover:text-purple-700 text-justify"
                      >
                        Health Care Professionals: {camp?.Healthcare_Professionals_in_Attendance.join(', ')}
                      </a>
                    </p>
                    <p className="mb-1 text-sm font-normal text-gray-500">
                      <a
                        href="#"
                        className="text-green-900 font-bold hover:text-purple-700 text-justify"
                      >
                        Fee: {camp?.Camp_Fees}
                      </a>
                    </p>
                    <p className="mb-1 text-sm font-normal text-gray-500">
                      <a
                        href="#"
                        className="text-green-900 font-bold hover:text-purple-700 text-justify"
                      >
                        Schedule : {camp?.Scheduled_Date_and_Time}
                      </a>
                    </p>
                    <p className="mb-1 text-sm font-normal text-gray-500">
                      <a
                        href="#"
                        className="text-green-900 font-bold hover:text-purple-700 text-justify"
                      >
                        Location : {camp?.Venue_Location}
                      </a>
                    </p>
                  </div>)
              }
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PopularMedicalCamps;
