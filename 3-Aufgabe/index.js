// index.js
exports.handler = async () => {
    const myEnvVar = process.env.MY_ENV_VAR || "Default Value";
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Environment Variable Value",
        value: myEnvVar,
      }),
    };
  };
  