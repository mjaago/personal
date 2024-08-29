import { navigate } from "app/actions";
import Button from "app/components/Button";
import { Heading } from "app/components/Heading";
import clsx from "clsx";
import { redirect } from "next/navigation";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "https://vercel.com/templates/next.js/portfolio-starter-kit": {
    name: "deploy",
  },
};

export function Navbar() {
  return (
    <aside className="shadow-diagonal w-[340px] border border-black">
      <nav className="flex flex-col gap-4 px-8 py-4" id="nav">
        <div className="flex flex-col gap-2">
          <Heading>Marten Jaago</Heading>
          <Me src={"/me.jpg"} />
          <p>Software dev from Estonia currently in Portugal</p>
        </div>
        <div className="flex flex-col gap-2">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Button key={path} className="" handleClick={navigate}>
                {name}
              </Button>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

export function Me({ src }: { src: string }) {
  return (
    <div className="relative">
      <div className="absolute h-full w-full"></div>
      <img
        src={src}
        alt="Me"
        className={clsx(
          "inline-flex h-auto w-full flex-shrink-0 items-center justify-center border border-black",
        )}
      />
    </div>
  );
}
