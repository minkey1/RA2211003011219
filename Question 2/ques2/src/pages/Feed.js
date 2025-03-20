import { useEffect, useState } from "react";
import { fetchFeedPosts} from "../api/api";
import FeedCard from "../components/FeedCard";

const Feed= () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadFeed = async () => {
      const newPosts = await fetchFeedPosts();
      setPosts(newPosts);
    };

    loadFeed();
    
    const interval = setInterval(loadFeed, 5000);//5sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Live Feed</h2>
      {posts.length > 0 ? (
        posts.map((post) => <FeedCard key={post.id} post={post} />)
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
};

export default Feed;
