import { Heading } from "app/components/Heading";
import { Projects } from "app/features/projects";
import { SimplePageLayout } from "app/features/simplepagelayout";
import { getProjects } from "./utils";

export default function Page() {
  let allProjects = getProjects();

  return (
    <SimplePageLayout title={<Heading.Page>Projects</Heading.Page>}>
      <Projects projects={allProjects} />
    </SimplePageLayout>
  );
}
