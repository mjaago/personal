import { notFound } from "next/navigation";
import { CustomMDX } from "app/features/mdx";
import { formatDate, getProjects } from "app/projects/utils";
import { baseUrl } from "app/sitemap";
import { SimplePageLayout } from "app/features/simplepagelayout";
import { Heading } from "app/components/Heading";

export default function Project({ params }) {
  let post = getProjects().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <SimplePageLayout
      title={
        <>
          <Heading.Page> {post.metadata.title}</Heading.Page>
        </>
      }
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/projects/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Marten Jaago",
            },
          }),
        }}
      />
      <article className="prose prose-pre:whitespace-pre-wrap prose-h2:font-normal prose-h2:text-xl prose-img:border prose-img:border-black hover:prose-a:decoration-accent prose-a:underline prose-a:underline-offset-2 prose-a:transition-colors prose-a:font-normal text-balck max-w-none">
        <CustomMDX source={post.content} />
      </article>
    </SimplePageLayout>
  );
}

/* export async function generateStaticParams() {
  let posts = getProjects();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getProjects().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
 */
