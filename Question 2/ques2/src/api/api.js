import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Your backend API

export const fetchTopUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data.topUsers;
  } catch (error) {
    console.error("Error fetching top users:", error);
    return [];
  }
};

export const fetchTrendingPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts?type=popular`);
    return response.data.topPosts;
  } catch (error) {
    console.error("Error fetching trending posts:", error);
    return [];
  }
};

export const fetchFeedPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts?type=latest`);
    return response.data.latestPosts;
  } catch (error) {
    console.error("Error fetching feed posts:", error);
    return [];
  }
};
