import { BlogPosts } from "app/features/posts";
import { CookieBanner } from "./features/cookiebanner";

export default function Page() {
  return (
    <div>
      <div className="my-8">
        <BlogPosts />
      </div>
      <CookieBanner />
    </div>
  );
}
