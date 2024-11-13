import BannerContent from "./BannerContent";
import Navbar from "./Navbar";
import OverlayImage from "./OverlayImage";

const Banner = () => {
  return (
    <div className="bg-[#9538E2] min-h-screen relative mb-80">

      <BannerContent></BannerContent>
      <OverlayImage></OverlayImage>
    </div>
  );
};

export default Banner;
