const FeedCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-3">
      <p className="text-gray-800">{post.content}</p>
    </div>
  );
};

export default FeedCard;
