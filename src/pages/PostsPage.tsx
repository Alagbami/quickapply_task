// src/pages/PostsPage.tsx
import React from 'react';
import PostsPageNavbar from '../components/PostsPageNavbar';
import PostHeader from '../components/PostHeader';
import BodyBodyContent from '../components/BlogBodyContent';
import Cta from '../components/Cta';
import JoinCommunity from '../components/JoinCommunity';
import AuthorAndShare from '../components/AuthorAndShare';
import OtherPosts from '../components/OtherPosts';

//import { blogPosts } from "../data/blogData"; // Adjust path based on your project structure

const PostsPage: React.FC = () => {
  return (
    <div>
      <PostsPageNavbar />
      <PostHeader />
      <BodyBodyContent />
      <AuthorAndShare />
      <OtherPosts />
      <Cta />
      <JoinCommunity />
    </div>
  );
};

export default PostsPage;
