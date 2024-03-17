import Banner from "../../Components/Home/Banner/Banner";
import PopularMedicalCamps from "../../Components/Home/Popular Medical Camps/PopularMedicalCamps";
import Container from "../../Components/Utils/Container";


const Home = () => {
    return (
       <>
       <Container>
        <Banner/>
        <PopularMedicalCamps/>
       </Container>
       </>
    );
};

export default Home;