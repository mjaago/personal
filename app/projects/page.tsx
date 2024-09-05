import dynamic from "next/dynamic";
import { Heading } from "app/components/Heading";
import { SimplePageLayout } from "app/features/simplepagelayout";
import { getProjects } from "./utils";

const Projects = dynamic(
  () => import("../features/projects").then((c) => c.Projects),
  {
    ssr: false,
  },
);

export default function Page() {
  let allProjects = getProjects();

  return (
    <SimplePageLayout title={<Heading.Page>Projects</Heading.Page>}>
      <Projects projects={allProjects} />
    </SimplePageLayout>
  );
}
