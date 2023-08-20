import { client } from "./contentful";

export async function getCategories() {
  return await client.getEntries({ content_type: "category" });
}
