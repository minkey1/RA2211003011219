const axios = require("axios");
const { API_BASE_URL, getAuthHeaders } = require("../config");

async function fetchAllPosts() {
    const users = await axios.get(`${API_BASE_URL}/users`, { headers: getAuthHeaders() });
    const allPosts = [];

    for (const userId of Object.keys(users.data.users)) {
        const posts = await axios.get(`${API_BASE_URL}/users/${userId}/posts`, { headers: getAuthHeaders() });
        allPosts.push(...posts.data.posts);
    }

    return allPosts;
}

async function fetchPostComments(postId) {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts/${postId}/comments`, { headers: getAuthHeaders() });
        return response.data.comments || [];
    } catch (error) {
        console.error(`Error fetching comments for post ${postId}:`, error.message);
        return [];
    }
}

async function getTopPostsByComments() {
    const posts = await fetchAllPosts();
    const postCommentCounts = [];

    for (const post of posts) {
        const comments = await fetchPostComments(post.id);
        postCommentCounts.push({ post, commentCount: comments.length });
    }

    const maxComments = Math.max(...postCommentCounts.map(p => p.commentCount));
    return postCommentCounts.filter(p => p.commentCount === maxComments).map(p => p.post);
}

async function getLatestPosts() {
    const posts = await fetchAllPosts();
    return posts.slice(-5).reverse();
}

module.exports = { getTopPostsByComments, getLatestPosts };
