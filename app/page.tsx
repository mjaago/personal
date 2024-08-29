import { BlogPosts } from "app/features/posts";
import { Banner } from "./components/Banner";
import Button from "./components/Button";

export default function Page({
  params: { hideBanner },
}: {
  params: { hideBanner?: string };
}) {
  console.log("hidebanner", { hideBanner });
  return (
    <div>
      <div className="my-8">
        <BlogPosts />
      </div>
      <Banner
        open={!hideBanner}
        setOpen={function (open: boolean): void {
          throw new Error("Function not implemented.");
        }}
      >
        <p>I'm not using any cookies</p>
        <Button
          /* onClick={() =>
            permanentRedirect("/?hideBanner=true", RedirectType.replace)
          } */
          primary
        >
          Nice!
        </Button>
      </Banner>
    </div>
  );
}
