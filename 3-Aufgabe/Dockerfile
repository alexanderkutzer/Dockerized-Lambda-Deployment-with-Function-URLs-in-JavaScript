# Dockerfile
FROM public.ecr.aws/lambda/nodejs:18

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy function code
COPY index.js ${LAMBDA_TASK_ROOT}

# Set environment variable
ENV MY_ENV_VAR="Default Docker Value"

# Set the CMD to your handler
CMD [ "index.handler" ]
