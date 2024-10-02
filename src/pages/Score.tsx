import AiHeader from "../components/AiHeader"
import StepsListScore from "../components/StepsListScore";
import VideoListScore from "../components/VideoListScore";

const Score = () => {
    // Function to handle button click
  const handleGetStarted = () => {
    alert("let add the login URL");
  };
  return (
    <div className="container mx-auto">
        <AiHeader
        title="Discover Your Resume Score: Your Key To Career Success"
        subtitle="We've observed many individuals using their resumes to secure jobs only to face disappointment. Thus, we've developed an AI-based method to evaluate applicants' resumes effectively."
        buttonText="Get Started for free"
        onButtonClick={handleGetStarted}
        />
        <StepsListScore />
        <VideoListScore />
   </div>
  )
}

export default Score;
