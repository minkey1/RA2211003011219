const { fetchAuthToken } = require("../config");

async function initializeAuth() {
    await fetchAuthToken();
    console.log("✅ Authentication token fetched!");
}

module.exports = { initializeAuth };
