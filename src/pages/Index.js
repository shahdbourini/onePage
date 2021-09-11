import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import ThirdPart from "../components/part3/ThirdPart";
import Slides from "../components/slider/Slides";
import Footer from "../components/footer/Footer";

export default function Index() {
    return (
        <>
           <Navbar />
           <About />
           <ThirdPart />
           <Slides />
           <Footer />
        </>
    )
}
