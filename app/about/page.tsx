import { Heading } from "app/components/Heading";
import { Link } from "app/components/Link";
import { Quote } from "app/components/Quote";
import { SimplePageLayout } from "app/features/simplepagelayout";

export default function Page() {
  return (
    <SimplePageLayout title={<Heading.Page>About me</Heading.Page>}>
      <div className="flex flex-col gap-2">
        <p>
          I’m a <b className="font-semibold">full-stack product engineer</b>{" "}
          from Estonia currently living in Porto, Portugal.
        </p>
        <p>
          In my early days I was an{" "}
          <b className="font-semibold">aspiring boxer</b> but after realizing
          the uncertainty in pro-sports I{" "}
          <b className="font-semibold">needed a change</b>. <br />
          You can still see some of my{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=m9TVBHGAI1w&list=PLUkjXrwYZ_LJe-1ohKkJfc0KWWO2vFfy5"
          >
            fights here
          </Link>
          .
        </p>
        <p>
          Since I’ve tinkered with computers from a young age the change was
          naturally going to be{" "}
          <b className="font-semibold">towards computer science</b>.
        </p>

        <Quote>
          Marten is a machine, motivated and independent, willing to learn
          whatever he needs to increase his impact
        </Quote>
        <div className="flex flex-col gap-1">
          <p>A non-comprehensive list of tech I feel at-home with:</p>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li>React/NextJS</li>
            <li>NodeJS</li>
            <li>Spring Boot</li>
            <li>PostgreSQL</li>
            <li>LLMs for application purposes</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>GitHub Actions</li>
          </ul>
        </div>
        <p>
          If you want to see some of my work and side-projects head to the{" "}
          <Link href="/projects">projects page</Link>.
        </p>
        <p>
          I also have a beautiful wife and an amazing son for whom I'm forever
          grateful.
        </p>
      </div>
    </SimplePageLayout>
  );
}
