import { createClient } from "next-sanity";

import { apiVersion, dataset } from "../env";

export const client = createClient({
  projectId: NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-11-10",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
