import Image from "next/image";
import profPic from "./prof.png";
export function Profile() {
  return (
    <div>
      <Image src={profPic} alt="プロフィール画像" />
    </div>
  );
}
