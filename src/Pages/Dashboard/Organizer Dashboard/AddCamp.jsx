import {
  Button,
  Card,
  Checkbox,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

const AddCamp = () => {
  return (
    <div>
      <div>
        <h4 className="text-center text-bold text-green-800 text-3xl underline mt-4 mb-4">
          ADD A CAMP
        </h4>
      </div>
      <div className="w-full">
        <Card color="transparent" shadow={false} className="w-full">
          <form className="mt-8 mb-2 px-6">
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
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="mt-3">
                    Camp Fee
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
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="mt-3">
                    Venue Location
                  </Typography>
                  <Input
                    size="lg"
                    type="text"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
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
                    placeholder="use comma after each service"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <Typography variant="h6" color="blue-gray" className="mt-3">
                  Healthcare Professionals in Attendance
                  </Typography>
                  <Input
                    size="lg"
                    type="text"
                    placeholder="use comma after each professionals"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
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
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
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
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </div>
              {/* Input-5 */}
              <div className="flex gap-3 flex-col md:flex-row">
                <div className="flex-1">
                  <Typography type="text" variant="h6" color="blue-gray" className="mb-3">
                  Comprehensive Description
                  </Typography>
                  <Textarea size="lg" label="Textarea Large" />
                </div>
              </div>
            </div>
            <Button className="mt-6 mb-6 bg-green-700 hover:bg-green-900" fullWidth>
              sign up
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddCamp;
