import Container from "../../Utils/Container";
import { Select, Option, Button } from "@material-tailwind/react";
import CampCard from "../../Card/CampCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
const PopularMedicalCamps = () => {
  const axiosPublic = useAxiosPublic()
  const [participant, setParticipant] = useState('asc')


  const handleSorting = (value) =>{
    setParticipant(value)
  }



  const {data:camps=[]} = useQuery({
    queryKey : ['camps', participant],
    queryFn: async()=>{
      const {data} = await axiosPublic(`/get-all-camps/?sortField=Participant_Count&sortOrder=${participant}`)
      return data;
    }
  })

  return (
    <Container>
      <div className="mt-16 relative">
        <h3 className="text-3xl text-center font-bold text-gray-800">
          Popular Medical Camps
        </h3>
        <div className="absolute right-0">
          <div className="flex w-72 flex-col gap-6">
            <Select onChange={handleSorting} label="Sort by  participant engagement" success>
              <Option value="asc">Low To High</Option>
              <Option value="desc">High To Low</Option>

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
