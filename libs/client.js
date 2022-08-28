import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "ai31bz7wpk",
  apiKey: process.env.API_KEY,
});