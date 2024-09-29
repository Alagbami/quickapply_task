// src/data.ts
{/*
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to make QuickApply work efficiently for you",
    date: "February 22nd, 2024",
    image: "/path/to/polygon-image.png", // Replace with correct path or URL
    description: "How to make QuickApply work efficiently for you",
  },
  {
    id: 2,
    title: "How to make QuickApply work efficiently for you",
    date: "February 22nd, 2024",
    image: "/path/to/polygon-image.png", // Replace with correct path or URL
    description: "How to make QuickApply work efficiently for you",
  },
  {
    id: 3,
    title: "How to make QuickApply work efficiently for you",
    date: "February 22nd, 2024",
    image: "/path/to/polygon-image.png", // Replace with correct path or URL
    description: "How to make QuickApply work efficiently for you",
  },
]; */}


// src/data.ts
// src/data.ts
export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to make QuickApply work efficiently for you",
    date: "February 22nd, 2024",
    image: "/src/assets/rectangle.png",
    description:
      "Learn the best practices to maximize QuickApply's potential for job applications. By optimizing your resume format, ensuring up-to-date credentials, and leveraging the built-in recommendation features, you can greatly enhance your chances of getting noticed by recruiters. This guide walks you through each feature of QuickApply, including tips for fine-tuning your profile, automating tasks, and utilizing smart alerts to stay ahead of job postings.",
    category: "Pricing",
  },
  {
    id: 2,
    title: "New Features to Help You Land Your Dream Job",
    date: "March 5th, 2024",
    image: "/src/assets/rectangle.png",
    description:
      "An overview of the latest features designed to enhance your job search experience. From personalized job recommendations based on your profile and job application history to enhanced communication tools that let you stay connected with recruiters in real-time. This article breaks down how these features can streamline your job search, saving you time while improving your chances of securing the right position.",
    category: "Announcements",
  },
  {
    id: 3,
    title: "Understanding Pricing Models for Job Applications",
    date: "April 10th, 2024",
    image: "/src/assets/rectangle.png",
    description:
      "A detailed guide on how to navigate different pricing models for job application services. This article covers the pros and cons of free-tier services versus premium options, including insights into which pricing models are best suited for your needs. Whether you're a job seeker on a budget or looking to invest in premium services, you'll find practical advice to help you make an informed decision.",
    category: "Announcements",
  },
  {
    id: 4,
    title: "Refund Policy for QuickApply SaaS",
    date: "May 15th, 2024",
    image: "/src/assets/rectangle.png",
    description: `
      - The following Refund Policy is applicable to all users of the QuickApply platform, a specialized Software-as-a-Service (SaaS) solution offered by CLOUTRA.
      - The following Refund Policy is applicable to all users of the QuickApply platform, a specialized Software-as-a-Service (SaaS) solution offered by CLOUTRA.
      - The following Refund Policy is applicable to all users of the QuickApply platform, a specialized Software-as-a-Service (SaaS) solution offered by CLOUTRA.
    `,
    category: "Announcements",
  },
  {
    id: 5,
    title: "How to Optimize Your Resume for ATS",
    date: "June 7th, 2024",
    image: "/src/assets/rectangle.png",
    description:
      "Find out how to make your resume stand out and pass Applicant Tracking Systems (ATS). This article explains the key factors that influence ATS results, such as keyword usage, formatting, and tailoring your resume to specific job descriptions. By understanding how ATS works, you can improve your chances of getting your resume seen by human recruiters and landing more interviews.",
    category: "Announcements",
  },
  {
    id: 6,
    title: "The Importance of Networking in a Job Search",
    date: "July 22nd, 2024",
    image: "/src/assets/rectangle.png",
    description:
      "Learn why building a strong network can significantly improve your job search success. This article explores the power of professional relationships, providing strategies for expanding your network through industry events, online platforms, and alumni networks. By establishing meaningful connections, you increase your visibility to potential employers and gain access to opportunities that may not be publicly advertised.",
    category: "Pricing",
  },
];
