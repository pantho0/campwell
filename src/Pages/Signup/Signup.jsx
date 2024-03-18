import { Button, Input, Option, Select } from "@material-tailwind/react";
import Container from "../../Components/Utils/Container";
import useAuth from "../../Components/Hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";

const Signup = () => {
  const [role, setRole] = useState('')
  const axiosPublic = useAxiosPublic()
  const {createUser} = useAuth()

  const handleRole = (value) =>{
    setRole(value)
  }
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if(!role){
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill up register as input field",
      });
    }
    const userInfo = {
      email : email,
      role : role,
    }
    createUser(email, password)
    .then(user=>{
      if(user){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signup Succeed",
          background : "#1B5E20",
          color : "#fff",
          showConfirmButton: false,
          timer: 1500
        });
        axiosPublic.post('/save-user',userInfo)
      }
    })
    .catch(error=>{
      if(error){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      }
    })
  };

  return (
    <div className="">
      <Container>
        <section className="">
          <div className="px-0 py-20 mx-auto max-w-7xl sm:px-4">
            <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
              <h1 className="mb-4 text-lg font-semibold text-center text-gray-900">
                Sign Up Now
              </h1>
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="w-full">
                  <Input type="email" name="email" label="Email" required/>
                </div>
                <div className="w-full">
                  <Input type="password" name="password" label="Password" required/>
                </div>
                <div className="w-full">
                  <Select onChange={handleRole} label="Register As" required>
                    <Option value="Organizer">Organizer</Option>
                    <Option value="Health Care Proffesional">Health Care Proffesional</Option>
                    <Option value="Participant">Participant</Option>
                  </Select>
                </div>
                <div className="w-1/2 mx-auto">
                  <Button type="submit" className="w-full">
                    <input type="submit" value="Signup Now" />
                  </Button>
                </div>
              </form>
              <div className="my-6">
                <hr />
              </div>
            </div>
            <p className="mb-4 text-xs text-center text-gray-400">
              <span className="text-purple-200 underline hover:text-white">
                Create an account
              </span>
              ·
              <span className="text-purple-200 underline hover:text-white">
                Forgot password
              </span>
              ·
              <span className="text-purple-200 underline hover:text-white">
                Privacy & Terms
              </span>
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Signup;
