import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

const CheckoutModal = ({ isOpen, closeModal }) => {
  const {user} = useAuth()
  const [txId, setTxId]= useState('')
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic()

  useEffect(()=>{
    axiosPublic.post('/create-payment-intent')
    .then(res=>setClientSecret(res.data))
  },[axiosPublic])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log(paymentMethod);
    }
  
    const {paymentIntent, error:cardError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method : {
        card : card,
        billing_details : {
          email : user?.email || 'anonymous',
          name : user?.displayName || 'anonymous',
        }
      }
    })

    if(cardError){
      console.log('confirming card payment error', cardError);
    }else{
      console.log('confirm card payment success', paymentIntent);
      setTxId(paymentIntent.id)
    }

  
  };

    
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
                    Check Out
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit}>
                      <CardElement
                        options={{
                          style: {
                            base: {
                              fontSize: "16px",
                              color: "#424770",
                              "::placeholder": {
                                color: "#aab7c4",
                              },
                            },
                            invalid: {
                              color: "#9e2146",
                            },
                          },
                        }}
                      />
                      <button type="submit" disabled={!stripe}>
                        Pay
                      </button>
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

export default CheckoutModal;
