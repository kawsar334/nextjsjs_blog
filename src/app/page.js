

 "use client"
import Image from "next/image";
import Blog from "./components/Blog";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
      setTimeout(() => setLoading(false), 600); 
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex gap-5 *:border *p-3">
      <ul className="flex justify-center items-center flex-wrap gap-2">
        {posts.map((post) => (
          <Blog post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
}
