import { Button, Card, Typography } from "@material-tailwind/react";
import useAuth from "../../../Components/Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic";
import CheckoutModal from "../../../Components/Modals/Checkout Modal/CheckoutModal";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";

const TABLE_HEAD = ["Camp Name", "Date and Time", "Camp Fees", "Payment Status", 'Confirmation Status', 'Actions' ];



const RegisteredCamps = () => {
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: camps = [], isPending } = useQuery({
    queryKey: ["camps", user?.email,],
    queryFn: async () => {
      const { data } = await axiosPublic(
        `get-registration-data/${user?.email}`
      );
      return data;
    },
  });


  if (isPending) {
    return <p>Loading...........</p>;
  }

  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY)


  return (
    <div>
      <Elements stripe={stripePromise}>
      <CheckoutModal isOpen={isOpen} closeModal={closeModal} />
      </Elements>
      <div>
        <h4 className="text-center text-bold text-green-800 text-3xl underline mt-4 mb-4">
          Registered Camps
        </h4>
      </div>
      <Card className="min-h-[calc(100vh-15vh)] max-w-[1045px] overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {camps.map(
              (
                {
                  campName,
                  date,
                  campFee,
                  payment,
                  status
                },
                index
              ) => {
                const isLast = index === camps.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr className="border" key={campName}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {campName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {campFee}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {payment}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {status}
                      </Typography>
                    </td>
                    <td className={classes}>  
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        <Button onClick={openModal}>Pay Now</Button>
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default RegisteredCamps;
