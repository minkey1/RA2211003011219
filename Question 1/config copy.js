// config.js
const axios = require("axios");

const API_BASE_URL = "http://20.244.56.144/test"; // Base API URL
let authToken = ""; // Store the token

async function fetchAuthToken() {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth`, {
            "companyName": "vansh",
            "clientID": "0192a2d7-1d30-4626-8107-dad539aae53c",
            "clientSecret": "PSppGoNwNWhDmoLT",
            "ownerName": "Vansh",
            "ownerEmail": "bharadwaj.vansh2004@gmail.com",
            "rollNo": "RA2211003011219"
        });
        authToken = response.data.access_token;
    } catch (error) {
        console.error("Error fetching auth token:", error.message);
    }
}

// Function to get auth headers
function getAuthHeaders() {
    return { Authorization: `Bearer ${authToken}` };
}

module.exports = { API_BASE_URL, fetchAuthToken, getAuthHeaders };
