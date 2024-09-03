import { getProjects, hasSeparatePage } from "app/projects/utils";
import { baseUrl } from "app/sitemap";

export async function GET() {
  let projects = getProjects();

  const itemsXml = projects
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .filter(hasSeparatePage)
    .map(
      (project) =>
        `<item>
          <title>${project.metadata.title}</title>
          <link>${baseUrl}/projects/${project.slug}</link>
          <description>${project.metadata.summary || ""}</description>
          <pubDate>${new Date(
            project.metadata.publishedAt,
          ).toUTCString()}</pubDate>
        </item>`,
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Marten Jaago's personal website</title>
        <link>${baseUrl}</link>
        <description>This is my personal website RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
