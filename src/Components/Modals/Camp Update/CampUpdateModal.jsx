import { Dialog, Transition } from "@headlessui/react";
import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { Fragment, useEffect, useState } from "react";
import { uploadImage } from "../../API/api";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const CampUpdateModal = ({ 
  isOpen, 
  closeModal, 
  campName, 
  campFee, 
  date, 
  location,
  special,
  professionals,
  audience,
  description

}) => {
    const {user} = useAuth()

  // const {data:camp={}}=useQuery({
  //   queryKey:['camp', user?.email,],
  //   queryFn : async()=>{
  //     const {data} = await axiosPublic(`/camp-details/${campId}`)
  //     return data;
  //   }
  // })

 
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
    
    
    
  }




  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 text-gray-900 text-center font-bold"
                  >
                    Update Camp
                  </Dialog.Title>
                  <div className="mt-2">
                    <Card color="transparent" shadow={false} className="w-full">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-8 mb-2 px-6"
                      >
                        <div className="mb-1 gap-6">
                          {/* Input-1 */}
                          <div className="flex gap-3 flex-col md:flex-row">
                            <div className="flex-1">
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-3"
                              >
                                Camp Name
                              </Typography>
                              <Input
                                size="lg"
                                defaultValue={campName}
                                type="text"
                                name="name"
                                placeholder="name@mail.com"
                                required
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                  className:
                                    "before:content-none after:content-none",
                                }}
                                {...register("name")}
                              />
                            </div>
                            <div className="flex-1">
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mt-3"
                              >
                                Camp Fee
                              </Typography>
                              <Input
                                size="lg"
                                type="number"
                                defaultValue={campFee}
                                name="fee"
                                placeholder="name@mail.com"
                                required
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                  className:
                                    "before:content-none after:content-none",
                                }}
                                {...register("fee")}
                              />
                            </div>
                          </div>
                          {/* Input-2 */}
                          <div className="flex gap-3 flex-col md:flex-row">
                            <div className="flex-1">
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-3"
                              >
                                Camp Date & Time
                              </Typography>
                              <Input
                                size="lg"
                                type="datetime-local"
                                placeholder="Enter Date and Time"
                                defaultValue={date}
                                name="datetime"
                                required
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                  className:
                                    "before:content-none after:content-none",
                                }}
                                {...register("datetime")}
                              />
                            </div>
                            <div className="flex-1">
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mt-3"
                              >
                                Venue Location
                              </Typography>
                              <Input
                                size="lg"
                                type="text"
                                defaultValue={location}
                                placeholder="Enter camp loaction"
                                name="location"
                                required
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                  className:
                                    "before:content-none after:content-none",
                                }}
                                {...register("location")}
                              />
                            </div>
                          </div>
                          {/* Input-3 */}
                          <div className="flex gap-3 flex-col md:flex-row">
                            <div className="flex-1">
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-3"
                              >
                                Specialized Services Provided
                              </Typography>
                              <Input
                                size="lg"
                                type="text"
                                defaultValue={special}
                                name="specialized"
                                placeholder="use comma after each service"
                                required
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                  className:
                                    "before:content-none after:content-none",
                                }}
                                {...register("specialized")}
                              />
                            </div>
                            <div className="flex-1">
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mt-3"
                              >
                                Healthcare Professionals in Attendance
                              </Typography>
                              <Input
                                size="lg"
                                type="text"
                                name="professionals"
                                defaultValue={professionals}
                                placeholder="use comma after each professionals"
                                required
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                  className:
                                    "before:content-none after:content-none",
                                }}
                                {...register("professionals")}
                              />
                            </div>
                          </div>
                          {/* Input-4 */}
                          <div className="flex gap-3 flex-col md:flex-row">
                            <div className="flex-1">
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mb-3"
                              >
                                Target Audience
                              </Typography>
                              <Input
                                size="lg"
                                type="text"
                                defaultValue={audience}
                                placeholder=""
                                name="audience"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                  className:
                                    "before:content-none after:content-none",
                                }}
                                {...register("audience")}
                              />
                            </div>
                            <div className="flex-1">
                              <Typography
                                variant="h6"
                                color="blue-gray"
                                className="mt-3"
                              >
                                Camp Image
                              </Typography>
                              <Input
                                size="lg"
                                type="file"
                                placeholder="name@mail.com"
                                required
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                  className:
                                    "before:content-none after:content-none",
                                }}
                                {...register("image")}
                              />
                            </div>
                          </div>
                          {/* Input-5 */}
                          <div className="flex gap-3 flex-col md:flex-row">
                            <div className="flex-1">
                              <Typography
                                type="text"
                                variant="h6"
                                color="blue-gray"
                                className="mb-3"
                              >
                                Comprehensive Description
                              </Typography>
                              <Textarea
                                required
                                defaultValue={description}
                                name="details"
                                {...register("details")}
                                size="lg"
                                label="Textarea Large"
                              />
                            </div>
                          </div>
                        </div>
                        <Button
                          type="submit"
                          className="mt-6 mb-6 bg-green-700 hover:bg-green-900"
                          fullWidth
                        >
                          Add Camp
                        </Button>
                      </form>
                    </Card>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CampUpdateModal;
