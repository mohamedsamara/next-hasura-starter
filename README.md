# Next Hasura Starter

This is a simple experimental Next.js app demonstrating how to use **Apollo Client** with **Hasura GraphQL** and **PostgreSQL**.

## Prerequisites  

* Docker & Docker Compose
* Node.js 18+
* Hasura CLI (optional for migrations)

## Setup

Follow these steps to start the backend services, apply the database migrations, and run the Next.js client app. After completing these steps, the app will be available at [http://localhost:3000](http://localhost:3000) and connected to the Hasura GraphQL backend.

1. Start services

    ```bash
    docker compose up -d
    ```

2. Apply migrations & metadata

    ```bash
    cd hasura
    hasura migrate apply --endpoint http://localhost:8080 --admin-secret ****
    hasura metadata apply --endpoint http://localhost:8080 --admin-secret ****
    ```

3. Run the Next.js app

    ```bash
    cd client
    pnpm install
    pnpm dev
    ```

4. Stop & remove containers

    ```bash
    docker compose down -v
    ```
