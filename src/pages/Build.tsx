import AiHeader from "../components/AiHeader"
import StepsListBuild from "../components/StepsListBuild";
import VideoListBuild from "../components/VideoListBuild";

const BuildPage = () => {
  // Function to handle button click
  const handleGetStarted = () => {
    alert("Let's add the login URL");
  };

  return (
    <div className="container mx-auto">
      <AiHeader
        title="Build your resume effortlessly with AI"
        subtitle="<b>Fed up with navigating to a document tool to craft your resume?</b> No need for that anymore. Simply provide us with the desired content for your resume, and our AI will build it for you."
        buttonText="Get Started for free"
        onButtonClick={handleGetStarted}
      />
      <StepsListBuild />
      <VideoListBuild />

    </div>
  );
};

export default BuildPage;
