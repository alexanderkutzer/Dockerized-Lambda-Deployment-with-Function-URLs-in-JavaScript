FROM public.ecr.aws/lambda/nodejs:22

COPY ./package.json ${LAMBDA_TASK_ROOT}
RUN npm i

COPY ./index.js ${LAMBDA_TASK_ROOT}

# Korrigierte ENV-Anweisung
ENV MY_ENV_VAR "From Dockerfile"

CMD ["index.handler"]
