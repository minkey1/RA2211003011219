const express = require("express");
const { initializeAuth } = require("./services/authService");
const { getTopUsers } = require("./services/userService");
const { getTopPostsByComments, getLatestPosts } = require("./services/postService");

const app = express();
const PORT = 3000;

initializeAuth();

app.get("/users", async (req, res) => {
    try {
        const topUsers = await getTopUsers();
        res.json({ topUsers });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch top users" });
    }
});

app.get("/posts", async (req, res) => {
    const { type } = req.query;

    try {
        if (type === "popular") {
            const topPosts = await getTopPostsByComments();
            res.json({ topPosts });
        } else if (type === "latest") {
            const latestPosts = await getLatestPosts();
            res.json({ latestPosts });
        } else {
            res.status(400).json({ error: "Invalid query parameter" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
