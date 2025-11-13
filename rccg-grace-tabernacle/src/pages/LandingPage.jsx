import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MissionVisionSection from "../components/AboutSection";
import EventsSection from "../components/EventsSection";
import Footer from "../components/Footer";

function LandingPage() {
    return (
        <div className="relative">
            <Header />
            <div>
                <HeroSection />
            </div>
            <div className="bg-gradient-to-b from-[#f9fafb] to-[#ede9fe]">
                <MissionVisionSection />  
            </div>
            <div>
                <EventsSection />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage;