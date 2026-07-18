import { Link } from "app/components/Link";

export function Bio() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        I’m a <b className="font-semibold">full-stack product engineer</b> from
        Estonia, currently working at{" "}
        <b className="font-semibold">Revolut</b>. Tech-wise I’m a{" "}
        <b className="font-semibold">web generalist</b>: I pick up whatever the
        product needs, from the UI down to the infrastructure it runs on.
      </p>
      <p>
        Before any of this I was a{" "}
        <b className="font-semibold">boxer</b> but now my{" "}
        <b className="font-semibold">back hurts</b>. See{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://withprain.com/journeys/7196"
        >
          how I fixed my back
        </Link>{" "}
        or{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=m9TVBHGAI1w&list=PLUkjXrwYZ_LJe-1ohKkJfc0KWWO2vFfy5"
        >
          how I got punched in the head
        </Link>
        .
      </p>
      <p>
        I also have a beautiful wife and an amazing son for whom I'm forever
        grateful.
      </p>
    </div>
  );
}
