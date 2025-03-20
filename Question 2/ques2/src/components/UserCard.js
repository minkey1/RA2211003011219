const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center">
      <span className="font-semibold">{user.userName}</span>
      <span className="text-gray-600">{user.postCount} posts</span>
    </div>
  );
};

export default UserCard;
