import { Dialog, Transition } from "@headlessui/react";
import {
  Button,
  Checkbox,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { Fragment } from "react";

const RegistrationModal = ({ isOpen, closeModal, fee }) => {
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
                    <form className="mt-8 mb-2 w-full">
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
                          placeholder="name@mail.com"
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
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
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
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
                        <Select label="Select Gender">
                          <Option>Male</Option>
                          <Option>Female</Option>
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
                        <Textarea label="Enter your address here" />
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
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
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
                          placeholder="name@mail.com"
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                          labelProps={{
                            className: "before:content-none after:content-none",
                          }}
                        />
                      <Button className="mt-6" fullWidth>
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
