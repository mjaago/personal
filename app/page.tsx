import dynamic from "next/dynamic";
import { Heading } from "app/components/Heading";
import { Bio } from "app/features/bio";
import { SimplePageLayout } from "app/features/simplepagelayout";
import { CookieBanner } from "./features/cookiebanner";
import { getProjects } from "./projects/utils";

const Projects = dynamic(
  () => import("./features/projects").then((c) => c.Projects),
  {
    ssr: false,
  },
);

export default function Page() {
  let allProjects = getProjects();

  return (
    <>
      <SimplePageLayout title={<Heading.Page>About me</Heading.Page>}>
        <div className="flex flex-col gap-10">
          <Bio />
          <div className="flex flex-col gap-6">
            <Heading.Page>Projects</Heading.Page>
            <Projects projects={allProjects} />
          </div>
        </div>
      </SimplePageLayout>
      <CookieBanner />
    </>
  );
}
