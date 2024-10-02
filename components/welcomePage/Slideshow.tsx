import Carousel from "./Carousel";
import AdditonalSlide from "./slideContent/AdditonalSlide";
import ClientSlide from "./slideContent/ClientSlide";
import FeaturesSlide from "./slideContent/FeaturesSlide";
import ServicesSlide from "./slideContent/ServicesSlide";
import WelcomeSlide from "./slideContent/WelcomeSlide";

export default function Slideshow() {
  const slideContent = {
    title: "Welcome to the Slide",
    secondaryText: "This is some additional information.",
  };
  const slides = [
    <WelcomeSlide />,
    <ServicesSlide />,
    <ClientSlide />,
    <FeaturesSlide />,
    <AdditonalSlide />
    ];

  return (
    <div className="flex justify-center mt-12 w-full h-screen">
      <div className="max-w-full max-h-full w-[90%] h-[80%] overflow-hidden rounded-lg shadow-lg">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
