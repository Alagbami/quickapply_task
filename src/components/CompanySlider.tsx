// CompanySlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

// Import logos (replace with correct paths)
import amazonLogo from "../assets/Logo.png";
import spotifyLogo from "../assets/Logo.png";
import netflixLogo from "../assets/Logo.png";
import spacexLogo from "../assets/Logo.png";
import walmartLogo from "../assets/Logo.png";
import discordLogo from "../assets/Logo.png";
import microsoftLogo from "../assets/Logo.png";
import slackLogo from "../assets/Logo.png";

// Company logos array
const companyLogos = [
  amazonLogo,
  spotifyLogo,
  netflixLogo,
  spacexLogo,
  walmartLogo,
  discordLogo,
  microsoftLogo,
  slackLogo,
];

const CompanySlider = () => {
  return (
    <div className=" h-[12rem] bg-gradient-to-b from-[#0A0C15] to-[#030512] w-full mb-7 py-[20px] px-4 mx-auto">
      <h3 className="text-center text-xl font-semibold mb-6 text-[#F8F9FF]">
        Our Users have gotten jobs from these notable companies
      </h3>

      <Swiper
        slidesPerView={4} // Adjust how many logos are shown at once
        spaceBetween={20}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true} // Infinite loop
        modules={[Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1.7 },
          1024: { slidesPerView: 4.7 },
        }}
        className="w-full"
      >
        {companyLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img
              src={logo}
              alt={`Company Logo ${index}`}
              className="mx-auto px-6 py-[20px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompanySlider;
