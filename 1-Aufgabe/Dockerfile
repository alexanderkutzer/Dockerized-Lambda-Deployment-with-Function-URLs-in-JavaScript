# Basis-Image
FROM public.ecr.aws/lambda/nodejs:16

# Kopiere Funktion in das Image
COPY index.js ${LAMBDA_TASK_ROOT}

# Befehl zum Starten der Lambda-Funktion
CMD ["index.handler"]
