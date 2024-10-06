import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// First line job titles
const jobTitlesLine1 = [
  "Software Engineer",
  "Architect",
  "Quantity Surveyor",
  "Product Designer",
  "Physicist",
  "Data Analyst",
  "Web3 Instructor",
  "Smart Contract Developer",
  "Web3 Designer",
];

// Second line job titles
const jobTitlesLine2 = [
  "Python Developer",
  "DevOps Engineer",
  "UI Designer",
  "Developer Relations Manager",
  "Graphics Designer",
  "Brand Designer",
  "UX Designer",
  "Full-Stack Developer",
  "Senior Accountant",
  "Criminal Lawyer",
];

const JobTitleCarousel = () => {
  return (
    <div className="my-8">
      {/* First Swiper (Slide Left) */}
      <Swiper
        slidesPerView={3} // Adjust the number of visible slides
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true} // Infinite loop
        modules={[Autoplay]} // Use Autoplay as module
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 7 },
        }}
      >
        {jobTitlesLine1.map((title, index) => (
          <SwiperSlide key={index}>
            <div className="text-[#131D26] text-[14px] border border-[#C1C1C3] rounded-[4px] font-medium px-3 py-2  text-center transition duration-300 transform hover:-translate-y-1">
              {title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Second Swiper (Slide Right using CSS direction) */}
      <div dir="rtl">
        <Swiper
          slidesPerView={3} // Adjust the number of visible slides
          spaceBetween={20}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true} // Infinite loop
          direction="horizontal" // Keep the direction horizontal
          modules={[Autoplay]} // Use Autoplay as module
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {jobTitlesLine2.map((title, index) => (
            <SwiperSlide key={index}>
              <div className="text-[#131D26] text-[14px] border border-[#C1C1C3] rounded-[4px] font-medium px-3 py-2  text-center transition duration-300 transform hover:-translate-y-1">
                {title}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default JobTitleCarousel;

