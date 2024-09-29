import BlogPost from "../components/BlogPost";
import Cta from "../components/Cta";
import QuickApplyBlog from "../components/QuickApplyBlog";
import FeaturedPosts from "../components/FeaturedPosts";
import JoinCommunity from "../components/JoinCommunity"


function App() {
  return (
    <div className="">
      <QuickApplyBlog />
      <FeaturedPosts />
      <BlogPost />
      <Cta />
      <JoinCommunity />
    </div>
  );
}

export default App;