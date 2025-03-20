const axios = require("axios");
const { API_BASE_URL, getAuthHeaders } = require("../config");

async function fetchUsers() {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`, { headers: getAuthHeaders() });
        return response.data.users;
    } catch (error) {
        console.error("Error fetching users:", error.message);
        return {};
    }
}

async function fetchUserPosts(userId) {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}/posts`, { headers: getAuthHeaders() });
        return response.data.posts || [];
    } catch (error) {
        console.error(`Error fetching posts for user ${userId}:`, error.message);
        return [];
    }
}

async function getTopUsers() {
    const users = await fetchUsers();
    const userPostCounts = [];

    for (const [userId, userName] of Object.entries(users)) {
        const posts = await fetchUserPosts(userId);
        userPostCounts.push({ userId, userName, postCount: posts.length });
    }
    return userPostCounts.sort((a, b) => b.postCount - a.postCount).slice(0, 5);
}

module.exports = { getTopUsers };
