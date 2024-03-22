import { Dialog, Transition } from "@headlessui/react";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { Fragment, useState } from "react";
import { useForm} from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";




const RegistrationModal = ({ isOpen, closeModal, fee }) => {
  const {user} = useAuth()
  const axiosPublic = useAxiosPublic()
  const [gender, setGender] = useState('')
  const selectedGender = (value) =>{
   setGender(value);
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const registrationInfo = {  
      name : data.name,
      email : user?.email,
      number : data.number, 
      age : data.age,
      gender : gender,
      address : data.address,
      emergency_number : data.emergencyNumber,
      campFee : data.fee

    }
    const {data:regData} = await axiosPublic.post("/registration", registrationInfo)
    if(regData.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration Successful",
        background : "#1B5E20",
        color : "#fff",
        showConfirmButton: false,
        timer: 1500
      });
      closeModal()
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
                    Registration Form
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
                      <div className="mb-1 flex flex-col gap-6">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                        >
                          Your Name
                        </Typography>
                        <Input
                          size="lg"
                          required
                          placeholder="name@mail.com"
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                          {...register("name")}
                        />
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                        >
                          Phone Number
                        </Typography>
                        <Input
                          size="lg"
                          type="number"
                          placeholder="name@mail.com"
                          required
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                          {...register("number")}
                        />
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                        >
                          Age
                        </Typography>
                        <Input
                          type="number"
                          size="lg"
                          placeholder=""
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                          {...register("age")}
                          required
                        />
                      </div>
                      <div className="w-full mt-8 mb-2">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mb-3"
                        >
                          Gender
                        </Typography>
                        <Select label="Select Gender" onChange={(e)=>selectedGender(e)}>
                          <Option value="male">Male</Option>
                          <Option value="female">Female</Option>
                        </Select>
                      </div>
                      <div className="w-full">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="mb-3"
                        >
                          Address
                        </Typography>
                        <Textarea label="Enter your address here" {...register("address")} />
                      </div>
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-3"
                      >
                        Emergency Contact Number
                      </Typography>
                      <Input
                        size="lg"
                        type="number"
                        placeholder="name@mail.com"
                        required
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        {...register("emergencyNumber")}
                      />
                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="mb-3"
                      >
                        Camp Fee
                      </Typography>
                      <Input
                        size="lg"
                        defaultValue={fee}
                        readOnly
                        type="number"
                        required
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        {...register("fee")}
                      />
                      <Button type="submit" className="mt-6" fullWidth>
                        Register
                      </Button>
                    </form>
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

export default RegistrationModal;
