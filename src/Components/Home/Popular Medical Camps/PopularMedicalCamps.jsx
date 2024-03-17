import Container from "../../Utils/Container";
import { Select, Option, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import CampCard from "../../Card/CampCard";
const PopularMedicalCamps = () => {
  const [camps, setCamps] = useState([]);
  useEffect(() => {
    fetch("popularmedicalcamps.json")
      .then((res) => res.json())
      .then((data) => setCamps(data));
  }, []);
  return (
    <Container>
      <div className="mt-16 relative">
        <h3 className="text-3xl text-center font-bold text-gray-800">
          Popular Medical Camps
        </h3>
        <div className="absolute right-0">
          <div className="flex w-72 flex-col gap-6">
            <Select label="Sort by  participant engagement" success>
              <Option>Low To High</Option>
              <Option>High To Low</Option>
            </Select>
          </div>
        </div>
        <div>
          <div className="px-4 py-16 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {
                camps.map(camp=><CampCard key={camp?.Camp_Name} camp={camp}/>)
              }
            </div>
            <div className="flex justify-center my-8">
              <Button className="bg-green-900">See All Camps</Button>
              </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PopularMedicalCamps;
