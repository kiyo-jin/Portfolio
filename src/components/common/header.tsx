import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="font-main fixed top-0 w-full flex justify-between p-6 z-50">
      <div>
        <Link href={"/"}>
          <Image
            src="/images/header_icon.svg"
            alt="header_icon"
            width={37}
            height={37}
          />
        </Link>
      </div>

      <div className="flex justify-center font-head ">
        <div>
          <a href="/profile" className="text-main p-6">
            profile
          </a>
        </div>
        <div>
          <a href="/contact" className="text-main p-10">
            contact
          </a>
        </div>
        <div>
          <a href="/works" className="text-main p-10">
            works
          </a>
        </div>
      </div>
    </header>
  );
}
