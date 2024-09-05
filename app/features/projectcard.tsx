import { Badge } from "app/components/Badge";
import { Button } from "app/components/Button";
import { Card } from "app/components/Card";
import { Heading } from "app/components/Heading";
import { Shimmer } from "app/components/Shimmer";
import { WithExternalLink } from "app/components/WithExternalLink";
import { hasSeparatePage, Project } from "app/projects/utils";
import clsx from "clsx";
import Link from "next/link";

export function ProjectCard({
  project,
  media,
  className,
}: {
  project: Project;
  media?: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={clsx("px-6 py-4", className)}
      media={<LinkIfPossible project={project}>{media}</LinkIfPossible>}
      title={
        <>
          <LinkIfPossible project={project}>
            <Heading.Section>{project.metadata.title}</Heading.Section>
          </LinkIfPossible>
          {project.metadata.tag ? (
            <Badge>{project.metadata.tag}</Badge>
          ) : undefined}
        </>
      }
      shadow={false}
    >
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-col space-x-0 md:flex-row md:space-x-2">
          <p>{project.metadata.summary}</p>
        </div>

        {hasSeparatePage(project) ? (
          <Button href={`/projects/${project.slug}`} primary className="w-fit">
            Read more
          </Button>
        ) : undefined}

        {project.metadata.link ? (
          <Button
            target="_blank"
            rel="noopener noreferrer"
            href={project.metadata.link}
            primary
            className="w-fit"
          >
            <WithExternalLink>Check it out</WithExternalLink>
          </Button>
        ) : undefined}
      </div>
    </Card>
  );
}

export function ShimmeringProjectCard() {
  return (
    <Card
      className="px-6 py-4"
      media={<Shimmer className="h-40 w-full border border-black" />}
      title={
        <>
          <Shimmer className="mb-0.5 h-6 w-32" />
          <Shimmer className="h-6 w-16 border border-black" />
        </>
      }
      shadow={false}
    >
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-col">
          <Shimmer className="mb-1 h-5 w-[95%]"></Shimmer>
          <Shimmer className="mb-1 h-5 w-full"></Shimmer>
          <Shimmer className="mb-1 h-5 w-[90%]"></Shimmer>
          <Shimmer className="mb-1 h-5 w-[92%]"></Shimmer>
          <Shimmer className="mb-1 h-5 w-[96%]"></Shimmer>
        </div>

        <Shimmer className="h-9 w-32 border-2 border-black" />
      </div>
    </Card>
  );
}

function LinkIfPossible({
  children,
  project,
  className,
}: {
  children: React.ReactNode;
  project: Project;
  className?: string;
}) {
  if (hasSeparatePage(project)) {
    return (
      <Link
        key={project.slug}
        className={className}
        href={`/projects/${project.slug}`}
      >
        {children}
      </Link>
    );
  } else if (project.metadata.link) {
    return (
      <Link
        key={project.metadata.link}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        href={project.metadata.link}
      >
        {children}
      </Link>
    );
  } else {
    return children;
  }
}
