import AiHeader from "../components/AiHeader"
import StepsListTailor from "../components/StepsListTailor";
import VideoListTailor from "../components/VideoListTailor";

const Tailor = () => {
    // Function to handle button click
  const handleGetStarted = () => {
    alert("let add the login URL");
  };
  return (
    <div className="container mx-auto">
        <AiHeader
        title="Tailor your resume to any position effortlessly with AI"
        subtitle="With just a job description, our AI can instantly tailor your resume to match the job in just a single click"
        buttonText="Get Started for free"
        onButtonClick={handleGetStarted}
        />
        <StepsListTailor/>
        <VideoListTailor />
   </div>
  )
}

export default Tailor
