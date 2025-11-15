import { useState, useEffect } from "react";
import { slides } from "../slides";
import {ArrowLeft, ArrowRight} from "lucide-react";

function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const autoplay = setInterval(() => {
            nextSlide();
        }, 15000)

        return () => clearInterval(autoplay);
    }, [currentIndex])
     
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }

    const Arrow = ({direction, onClick}) => {
        return (
            <div className="hidded group-hover:block absolute top-[50%] translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 text-white cursor-pointer" style={{[direction]: "20px"}}>
                {direction === "left" ? <ArrowLeft onClick={onClick} size={25}/> : <ArrowRight onClick={onClick} size={25}/>}
            </div>
        )
    }
    return (
        <div className="relative w-full h-screen overflow-hidden group">
            <div
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            className="w-full h-full bg-center bg-cover duration-700 ease-in-out"
            >
            <div className="absolute inset-0 bg-[#000032]/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-white text-4xl md:text-6xl font-[Montserrat] font-extrabold mb-4 leading-tight drop-shadow-2xl">
                    Welcome to RCCG Grace Tabernacle Young Adults and Youth Church
                </h1>
                <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mb-6 drop-shadow-lg">
                    Where Grace Speaks Louder than Words
                </p>
                <button className="bg-[#0033A0] text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300">
                    About Us
                </button>
            </div>
            </div>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer hidden group-hover:block">
                <ArrowLeft onClick={prevSlide} size={35} />
            </div>

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer hidden group-hover:block">
                <ArrowRight onClick={nextSlide} size={35} />
            </div>
        </div>
    )
}

export default HeroSection;