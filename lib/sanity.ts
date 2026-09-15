import { createClient } from "@sanity/client";

export const sanityClient =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_DATASET
    ? createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
        useCdn: true
      })
    : null;

export async function fetchFromSanity<T>(query: string, fallback: T): Promise<T> {
  if (!sanityClient) {
    return fallback;
  }

  try {
    return await sanityClient.fetch<T>(query);
  } catch {
    return fallback;
  }
}
