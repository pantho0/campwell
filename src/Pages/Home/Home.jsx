
import Banner from "../../Components/Home/Banner/Banner";
import PopularMedicalCamps from "../../Components/Home/Popular Medical Camps/PopularMedicalCamps";
import Testimonials from "../../Components/Home/Testimonials/Testimonials";
import Container from "../../Components/Utils/Container";




const Home = () => {

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