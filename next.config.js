require("dotenv").config();

module.exports = {
    env: {
        APP_NAME: process.env.APP_NAME,
        BACKEND_URL: process.env.BACKEND_URL,
    },
};
