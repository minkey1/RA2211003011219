const axios = require("axios");


const clientID = "";
const clientSecret = "";
const ownerName = "";
const ownerEmail = "";
const rollNo = "";
const companyName = "";
const API_BASE_URL = "http://20.244.56.144/test";


if (!clientID || !clientSecret || !ownerName || !ownerEmail || !rollNo || !companyName) {
    console.error("❌ Please fill in the required fields in config.js");
    process.exit(1);
}

let authToken = "";

async function fetchAuthToken() {
    try {
        console.log("🔄 Fetching authentication token...");

        const response = await axios.post(`${API_BASE_URL}/auth`, {
            "companyName": companyName,
            "clientID": clientID,
            "clientSecret": clientSecret,
            "ownerName": ownerName,
            "ownerEmail": ownerEmail,
            "rollNo": rollNo
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
