import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../assets/home/01.jpg";
import slide2 from "../../assets/home/02.jpg";
import slide3 from "../../assets/home/03.jpg";
import slide4 from "../../assets/home/04.jpg";
import slide5 from "../../assets/home/05.jpg";
import slide6 from "../../assets/home/06.jpg";

const Banner = () => {
    return (
        <div className="h-[100vh] md:pt-0 pt-[63px]">
            <Carousel
                showThumbs
                showStatus={false}
                className="h-full"
                thumbWidth={48} // Equivalent to w-12
            >
                <div>
                    <img src={slide1} className="md:h-[88vh] object-contain md:object-cover relative" alt="Slide 1" />
                    <div className="bg-black inset-0 top-0 left-0 right-0 opacity-10 absolute"></div>
                </div>
                <div>
                    <img src={slide2} className="md:h-[88vh] object-contain md:object-cover relative" alt="Slide 2" />
                    <div className="bg-black inset-0 top-0 left-0 right-0 opacity-10 absolute"></div>
                </div>
                <div>
                    <img src={slide3} className="md:h-[88vh] object-contain md:object-cover relative" alt="Slide 3" />
                    <div className="bg-black inset-0 top-0 left-0 right-0 opacity-10 absolute"></div>
                </div>
                <div>
                    <img src={slide4} className="md:h-[88vh] object-contain md:object-cover relative" alt="Slide 4" />
                    <div className="bg-black inset-0 top-0 left-0 right-0 opacity-10 absolute"></div>
                </div>
                <div>
                    <img src={slide5} className="md:h-[88vh] object-contain md:object-cover relative" alt="Slide 5" />
                    <div className="bg-black inset-0 top-0 left-0 right-0 opacity-10 absolute"></div>
                </div>
                <div>
                    <img src={slide6} className="md:h-[88vh] object-contain md:object-cover relative" alt="Slide 6" />
                    <div className="bg-black inset-0 top-0 left-0 right-0 opacity-10 absolute"></div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
