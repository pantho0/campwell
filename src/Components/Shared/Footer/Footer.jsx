import { Typography } from "@material-tailwind/react";
import Container from "../../Utils/Container";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    
  return (
    <div className="bg-green-900">
      <Container>
        <footer className="w-full bg-green-900 p-8">
          <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-green-900 text-center md:justify-between">
            <img
              src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
              alt="logo-ct"
              className="w-10"
            />
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="white"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  About Us
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="white"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  License
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="white"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  Contribute
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="white"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  Contact Us
                </Typography>
              </li>
            </ul>
          </div>
          <hr className="my-8 border-gray-700" />
          <Typography color="white" className="text-center font-normal text-sm">
            &copy; {currentYear} ALL RIGHTS RESERVED CAMPWELL
          </Typography>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
