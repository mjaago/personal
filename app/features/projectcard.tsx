import { Button } from "app/components/Button";
import { Card } from "app/components/Card";
import { Heading } from "app/components/Heading";
import { Project } from "app/projects/utils";
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
      media={<ProjectLink slug={project.slug}>{media}</ProjectLink>}
      title={
        <ProjectLink slug={project.slug}>
          <Heading.Section>{project.metadata.title}</Heading.Section>
        </ProjectLink>
      }
      shadow={false}
    >
      <div className="flex flex-col gap-4">
        <div className="flex w-full flex-col space-x-0 md:flex-row md:space-x-2">
          <p>{project.metadata.summary}</p>
        </div>

        <Button
          key={project.slug}
          href={`/projects/${project.slug}`}
          primary
          className="w-fit"
        >
          Read more
        </Button>
      </div>
    </Card>
  );
}

function ProjectLink({
  children,
  slug,
}: {
  children: React.ReactNode;
  slug: string;
}) {
  return (
    <Link key={slug} href={`/projects/${slug}`}>
      {children}
    </Link>
  );
}
