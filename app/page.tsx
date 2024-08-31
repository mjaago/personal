import { BlogPosts } from "app/features/posts";
import { CookieBanner } from "./features/cookiebanner";

export default function Page() {
  return (
    <div>
      <BlogPosts />
      <CookieBanner />
    </div>
  );
}
