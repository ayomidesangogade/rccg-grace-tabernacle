import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import Footer from "../components/Footer";
import YaYaLogo from "../assets/pngaaa.com-2183657.png";

function LandingPage() {
    return (
        <div className="relative">
            <Header logo={YaYaLogo}/>
            <div>
                <HeroSection />
            </div>
            <div className="bg-gradient-to-b from-[#f9fafb] to-[#ede9fe]">
                <AboutSection />  
            </div>
            <EventsSection />
            <Footer />
        </div>
    )
}

export default LandingPage;