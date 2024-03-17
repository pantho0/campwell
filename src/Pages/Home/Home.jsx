import { useContext } from "react";
import Banner from "../../Components/Home/Banner/Banner";
import PopularMedicalCamps from "../../Components/Home/Popular Medical Camps/PopularMedicalCamps";
import Testimonials from "../../Components/Home/Testimonials/Testimonials";
import Container from "../../Components/Utils/Container";
import { AuthContext } from "../../Provider/AuthProvider";
import autoprefixer from "autoprefixer";


const Home = () => {
    const user = useContext(AuthContext)
    console.log(user);
    return (
       <>
       <Container>
        <Banner/>
        <PopularMedicalCamps/>
        <Testimonials/>
       </Container>
       </>
    );
};

export default Home;