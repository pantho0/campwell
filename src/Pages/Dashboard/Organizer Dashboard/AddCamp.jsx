import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form"
import { uploadImage } from "../../../Components/API/api";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../Components/Hooks/useAuth";


const AddCamp = () => {
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) =>{
    const image = {image: data.image[0]}
    const imageUrl = await uploadImage(image)
    const campData = {
      Camp_Name : data.name,
      Image : imageUrl,
      Camp_Fees : data.fee,
      Scheduled_Date_and_Time : data.datetime,
      Venue_Location : data.location,
      Specialized_Services_Provided : data.specialized,
      Healthcare_Professionals_in_Attendance: data.professionals,
      Target_Audience : data.audience,
      Participant_Count: 0,
      Details: data.details,
      organizer_email : user?.email
    }
    
    const {data:campuploadresult} = await axiosPublic.post('/add-camp',campData)
    if(campuploadresult.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Camp Added",
        background : "#1B5E20",
        color : "#fff",
        showConfirmButton: false,
        timer: 1500
      });
    }
    reset();
  }

  return (
    <div>
      <div>
        <h4 className="text-center text-bold text-green-800 text-3xl underline mt-4 mb-4">
          ADD NEW CAMP
        </h4>
      </div>
      <div className="w-full">
        <Card color="transparent" shadow={false} className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 px-6">
            <div className="mb-1 gap-6">
              {/* Input-1 */}
              <div className="flex gap-3 flex-col md:flex-row">
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Camp Name
                  </Typography>
                  <Input
                    size="lg"
                    type="text"
                    name="name"
                    placeholder="name@mail.com"
                    required
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register('name')}
                  />
                </div>
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="mt-3">
                    Camp Fee
                  </Typography>
                  <Input
                    size="lg"
                    type="number"
                    name="fee"
                    placeholder="name@mail.com"
                    required
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register('fee')}
                  />
                </div>
              </div>
              {/* Input-2 */}
              <div className="flex gap-3 flex-col md:flex-row">
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                    Camp Date & Time
                  </Typography>
                  <Input
                    size="lg"
                    type="datetime-local"
                    placeholder="Enter Date and Time"
                    name="datetime"
                    required
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register('datetime')}
                  />
                </div>
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="mt-3">
                    Venue Location
                  </Typography>
                  <Input
                    size="lg"
                    type="text"
                    placeholder="Enter camp loaction"
                    name="location"
                    required
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register('location')}
                  />
                </div>
              </div>
              {/* Input-3 */}
              <div className="flex gap-3 flex-col md:flex-row">
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                  Specialized Services Provided
                  </Typography>
                  <Input
                    size="lg"
                    type="text"
                    name="specialized"
                    placeholder="use comma after each service"
                    required
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register('specialized')}
                  />
                </div>
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="mt-3">
                  Healthcare Professionals in Attendance
                  </Typography>
                  <Input
                    size="lg"
                    type="text"
                    name="professionals"
                    placeholder="use comma after each professionals"
                    required
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register('professionals')}
                  />
                </div>
              </div>
              {/* Input-4 */}
              <div className="flex gap-3 flex-col md:flex-row">
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="mb-3">
                  Target Audience
                  </Typography>
                  <Input
                    size="lg"
                    type="text"
                    placeholder=""
                    name="audience"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register('audience')}
                  />
                </div>
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="mt-3">
                    Camp Image
                  </Typography>
                  <Input
                    size="lg"
                    type="file"
                    placeholder="name@mail.com"
                    required
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    {...register('image')}
                  />
                </div>
              </div>
              {/* Input-5 */}
              <div className="flex gap-3 flex-col md:flex-row">
                <div className="flex-1">
                  <Typography type="text"  variant="h6" color="blue-gray" className="mb-3">
                  Comprehensive Description
                  </Typography>
                  <Textarea required name="details" {...register('details')} size="lg" label="Textarea Large" />
                </div>
              </div>
            </div>
            <Button type="submit" className="mt-6 mb-6 bg-green-700 hover:bg-green-900" fullWidth>
              Add Camp
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddCamp;
