// index.js
const axios = require('axios');

exports.handler = async () => {
  try {
    const response = await axios.get('https://api.github.com');
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "API call successful!",
        data: response.data
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "API call failed",
        error: error.message
      }),
    };
  }
};
