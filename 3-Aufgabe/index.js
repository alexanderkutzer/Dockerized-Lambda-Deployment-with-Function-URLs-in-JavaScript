const axios = require("axios");

const handler = async (event, context) => {
    console.log(event);
    const myEnvVar = process.env.MY_ENV_VAR;
    const response = await axios.get("https://api.github.com");
    const data = response.data;
    
    return {
        statusCode: 200,
        body: JSON.stringify({ data, myEnvVar })
    };
};

module.exports = { handler };

if (require.main === module) {
    // This code will only run if the file is run directly
    console.log("This module is being run directly");
    handler().then(x => console.log(x))
    .catch(e => console.error(e));
} else {
    // This code will run if the file is required/imported
    console.log("This module has been required/imported");
}
