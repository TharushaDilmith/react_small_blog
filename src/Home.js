import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Getting started with github",
      body: "Install github...",
      author: "Tharusha",
      id: 1,
    },
    {
      title: "Getting started with mongoDB",
      body: "Login with mongodb...",
      author: "Didula",
      id: 2,
    },
    {
      title: "Getting started with nodejs",
      body: "Install nodejs... ",
      author: "Pamal",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
