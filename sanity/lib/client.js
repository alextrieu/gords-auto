import { createClient } from "next-sanity";

// import { apiVersion, dataset } from "../env";

export const client = createClient({
  projectId: "t1hlsh4j",
  dataset: "production",
  apiVersion: "2024-11-10",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
