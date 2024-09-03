import { Badge } from "app/components/Badge";
import { Button } from "app/components/Button";
import { Card } from "app/components/Card";
import { Heading } from "app/components/Heading";
import { hasSeparatePage, Project } from "app/projects/utils";
import Link from "next/link";

export function ProjectCard({
  project,
  media,
}: {
  project: Project;
  media?: React.ReactNode;
}) {
  return (
    <Card
      className="px-6 py-4"
      media={<LinkIfPossible project={project}>{media}</LinkIfPossible>}
      title={
        <div>
          <LinkIfPossible project={project}>
            <Heading.Section>{project.metadata.title}</Heading.Section>
          </LinkIfPossible>
          {project.metadata.tag ? (
            <Badge className="mt-1">{project.metadata.tag}</Badge>
          ) : undefined}
        </div>
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
            Check it out
          </Button>
        ) : undefined}
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
