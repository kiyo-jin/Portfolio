import Image from "next/image";
import Hero from "@/components/common/Top/hero";
import { WorkSection } from "@/components/workSection";
import Profile from "@/components/common/Top/profile";
import ViewMore from "@/components/viewMore";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 py-8">
      <Hero />

      <Image
        src="/images/wave_line.svg"
        alt="wave"
        width={1280}
        height={28}
        className="w-full"
      />
      <Profile />

      <ViewMore to="/profile"/>

      <Image
        src="/images/wave_line.svg"
        alt="wave"
        width={1280}
        height={28}
        className="w-full"
      />

      <p className="text-main text-[64px] font-bold">Works</p>
      <div className="flex gap-x-12 overflow-x-auto scrollbar">
        <WorkSection
          imageUrl="/images/works.svg"
          altText="works1"
          description="テキスト"
          linkUrl="/work1"
          visibleTags={["JavaScript", "TypeScript"]}
        />
        <WorkSection
          imageUrl="/images/works.svg"
          altText="works1"
          description="テキスト"
          linkUrl="/work1"
          visibleTags={["JavaScript", "TypeScript"]}
        />
        <WorkSection
          imageUrl="/images/works.svg"
          altText="works1"
          description="テキスト"
          linkUrl="/work1"
          visibleTags={["JavaScript", "TypeScript"]}
        />
        <WorkSection
          imageUrl="/images/works.svg"
          altText="works1"
          description="テキスト"
          linkUrl="/work1"
          visibleTags={["JavaScript", "TypeScript"]}
        />
      </div>
      <ViewMore to="/works"/>

    </div>
  );
}
