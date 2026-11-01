
# -------------------------------
# STAGE 1: Build / prepare app
# -------------------------------
FROM node:22-bookworm-slim AS build

WORKDIR /app

# Copy dependency definition first
COPY package.json ./

# Install production dependencies
RUN npm install --omit=dev

# Copy application source code
COPY app.js ./

# -------------------------------
# STAGE 2: Minimal runtime
# -------------------------------
FROM gcr.io/distroless/nodejs22-debian13:nonroot

WORKDIR /app

# Copy only the prepared application
# and its dependencies from Stage 1
COPY --from=build --chown=nonroot:nonroot /app /app

EXPOSE 3000

# Distroless Node.js already uses Node
CMD ["app.js"]
