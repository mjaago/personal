import { getProjects, hasSeparatePage } from "./projects/utils";

export const baseUrl = "https://mjaago.com";

export default async function sitemap() {
  let blogs = getProjects()
    .filter(hasSeparatePage)
    .map((post) => ({
      url: `${baseUrl}/projects/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }));

  let routes = ["", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
