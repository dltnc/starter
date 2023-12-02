import { createDirectus, graphql } from "@directus/sdk";

const directus = createDirectus("http://localhost:8055").with(graphql());

export default directus;
