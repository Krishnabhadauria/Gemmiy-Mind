// src/Blog.js
import React from "react";
import "./Blog.css";

const blogData = [
  {
    title: "The Importance of Mental Health for Academic Success",
    content:
      "Maintaining good mental health is crucial for students seeking to achieve academic success. Mental well-being affects how we think, feel, and act, and plays a significant role in how we handle stress, relate to others, and make choices. Students often face high levels of stress due to academic pressures, which can lead to anxiety, depression, and other mental health issues. Recognizing the importance of mental health is the first step in ensuring a productive and fulfilling academic experience.",
  },
  {
    title: "Turn Passion into Profession",
    content:
      "It’s never too early to start planning for your future. As you return to school looking forward to charting a new year, it’s important to consider how your actions today inform your path tomorrow. This new season is the perfect time to start thinking about your career and plans for the future. Many of you already have a solid plan, while others are still creating yours. Both perspectives are perfectly normal and valid. Take the time to think about what’s important to you while you begin to shape your plans.",
  },
  {
    title: "Time Management for Students",
    content:
      "Effective time management is crucial for students to balance their academic responsibilities, extracurricular activities, and personal life. By developing strong time management skills, students can enhance their productivity, reduce stress, and achieve their academic goals.",
  },
  {
    title: "Overcoming Procrastination",
    content:
      "Overcoming procrastination is a vital skill that can significantly enhance productivity and well-being. The first step is to recognize the underlying causes of procrastination, which often stem from fear of failure, perfectionism, or feeling overwhelmed by tasks. By breaking tasks into smaller, manageable chunks, students can alleviate the anxiety associated with large projects and create a clearer path to completion. Implementing techniques such as the Pomodoro Technique—working for a focused period followed by short breaks—can help maintain concentration and momentum. ",
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      {blogData.map((blog, index) => (
        <div key={index} className="blog-post">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
