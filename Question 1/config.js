const axios = require("axios");

let authToken = "";

async function fetchAuthToken() {
    try {
        console.log("🔄 Fetching authentication token...");

        const response = await axios.post("http://20.244.56.144/test/auth", {
            "companyName": "vansh",
            "clientID": "0192a2d7-1d30-4626-8107-dad539aae53c",
            "clientSecret": "PSppGoNwNWhDmoLT",
            "ownerName": "Vansh",
            "ownerEmail": "bharadwaj.vansh2004@gmail.com",
            "rollNo": "RA2211003011219"
        });

        authToken = response.data.access_token;
        console.log("✅ Auth token fetched successfully:", authToken);
    } catch (error) {
        console.error("❌ Error fetching auth token!");
        if (error.response) {
            console.error(`⚠️ Status: ${error.response.status}`);
            console.error(`📩 Response:`, error.response.data);
        } else {
            console.error("🚨 Request error:", error.message);
        }
    }
}

function getAuthHeaders() {
    return { Authorization: `Bearer ${authToken}` };
}

module.exports = { API_BASE_URL, fetchAuthToken, getAuthHeaders };
