import CallforAction from "./CallforAction";
import Secondary from "./Secondary";
import Slide from "./Slideshow";
import Testimonals from "./Testimonals";
import WelcomeNav from "./WelcomeNav";

const WelcomePage = () => {
  return (
    <div>
      <WelcomeNav />
      <Slide />
      <Secondary />
      <CallforAction />
      <Testimonals />
    </div>
  );
};

export default WelcomePage;
