import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import Footer from "../components/Footer";
import GTLogo from "../assets/RCCG_GRACE_TABERNACLE_YP4_20251115_110527-removebg-preview (1).png";

function LandingPage() {
    return (
        <div className="relative">
            <Header logo={GTLogo}/>
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