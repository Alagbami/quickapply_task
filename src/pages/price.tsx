import CompanySlider from '../components/CompanySlider';
import JobTitleCarousel from '../components/JobTitleCarousel'; // Assuming you saved the component here

const price = () => {
    return (
        <div>
          {/* Include the carousel */}
          <JobTitleCarousel />
          <CompanySlider />
        </div>
      );
    };

export default price
