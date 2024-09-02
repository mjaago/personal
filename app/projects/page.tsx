import { Heading } from "app/components/Heading";
import { Projects } from "app/features/projects";
import { SimplePageLayout } from "app/features/simplepagelayout";

export default function Page() {
  return (
    <SimplePageLayout title={<Heading.Page>Projects</Heading.Page>}>
      <Projects />
    </SimplePageLayout>
  );
}
