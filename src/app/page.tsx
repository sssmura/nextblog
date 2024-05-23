import { Profile } from "@/components/Profile";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <Link href={"/mdx-page"}>mdx-page</Link>
      <h1>Profile</h1>
      <Profile />
    </div>
  );
}
