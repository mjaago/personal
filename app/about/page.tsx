import { Heading } from "app/components/Heading";
import { Link } from "app/components/Link";
import { Bio } from "app/features/bio";
import { SimplePageLayout } from "app/features/simplepagelayout";

export default function Page() {
  return (
    <SimplePageLayout title={<Heading.Page>About me</Heading.Page>}>
      <div className="flex flex-col gap-2">
        <Bio />
        <p>
          If you want to see some of my work and side-projects head to the{" "}
          <Link href="/projects">projects page</Link>.
        </p>
      </div>
    </SimplePageLayout>
  );
}
