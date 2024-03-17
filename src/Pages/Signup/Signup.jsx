import { Button, Input } from "@material-tailwind/react";
import Container from "../../Components/Utils/Container";
import useAuth from "../../Components/Hooks/useAuth";

const Signup = () => {

  const {createUser} = useAuth()


  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then(user=>{
      console.log(user?.user);
    })
    .catch(error=>{
      console.log(error?.message);
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
                  <Input type="email" name="email" label="Email" />
                </div>
                <div className="w-full">
                  <Input type="password" name="password" label="Password" />
                </div>
                <div className="w-1/2 mx-auto">
                  <Button className="w-full">
                    <input type="submit" value="Login Now" />
                  </Button>
                </div>
              </form>
              <div className="my-6">
                <hr />
              </div>
              <div className="w-1/2 mx-auto">
                <Button className="w-full">
                  <input type="submit" value="Login with google" />
                </Button>
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
