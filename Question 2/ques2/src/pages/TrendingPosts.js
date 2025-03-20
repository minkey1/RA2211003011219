import { useEffect, useState } from "react";
import { fetchTrendingPosts } from "../api/api";
import { getRandomPostImage } from "../assets/randomImages";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchTrendingPosts().then(setPosts);
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Trending Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="bg-gray-100 p-3 rounded-lg mb-2">
          <img src={getRandomPostImage()} alt="Post" className="w-full rounded-lg mb-2" />
          <p>{post.content}</p>
          <span className="text-sm text-gray-500">💬 {post.commentCount} comments</span>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
