const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-3">
      <p className="text-gray-800">{post.content}</p>
      {post.commentCount !== undefined && (
        <p className="text-sm text-gray-500">💬 {post.commentCount} comments</p>
      )}
    </div>
  );
};

export default PostCard;
