import { useEffect, useState } from "react";
import { fetchTopUsers} from "../api/api";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTopUsers().then(setUsers);
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Top Users</h2>
      {users.length > 0 ? (
        users.map(user => (
          <div key={user.userId} className="bg-gray-100 p-3 rounded-lg mb-2">
            <span>{user.userName} - {user.postCount} posts</span>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default TopUsers;
