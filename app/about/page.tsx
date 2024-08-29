import { CookieBanner } from "app/features/cookiebanner";
import { BlogPosts } from "app/features/posts";

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
