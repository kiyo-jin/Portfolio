import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full  bottom-0">
      <Image
        src="/images/fotter.svg"
        alt="wave"
        width={1280}
        height={28}
        className="w-full"
      />
      <div className="bg-main py-6 px-12 flex justify-end gap-x-[60px]">
        <a href="https://github.com/" target="_blank">
          <Image
            src="/images/icons/github_icon.svg"
            alt="github_icon"
            width={33}
            height={34}
          />
        </a>

        <a href="https://www.instagram.com/" target="blank">
          <Image
            src="/images/icons/insta_icon.svg"
            alt="insta_icon"
            width={33}
            height={34}
          />
        </a>

        <Link href={"/contact"}>
        <Image
          src="/images/icons/Mail_icon.svg"
          alt="mail_icon"
          width={30}
          height={24}
        />
        </Link>

      </div>
    </footer>
  );
}
