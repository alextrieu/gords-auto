import { createClient } from "next-sanity";

import { apiVersion, dataset } from "../env";

export const client = createClient({
  projectId: "t1hlsh4j",
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
