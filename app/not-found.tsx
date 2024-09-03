import { Heading } from "./components/Heading";

export default function NotFound() {
  return (
    <section>
      <Heading.Page>404 - Page Not Found</Heading.Page>
      <p className="my-4">The page you are looking for does not exist.</p>
    </section>
  );
}
