import Image from "next/image";
import Link from "next/link";

type WorkSectionPrpos = {
  imageUrl: string;
  altText: string;
  description: string;
  linkUrl: string;
  visibleTags ?: string[];
};

export const WorkSection = ({
  imageUrl,
  altText = "work1",
  description,
  linkUrl,
  visibleTags = [],
}: WorkSectionPrpos) => {
    const allTags ={
        "HTML/CSS": 'bg-[#D5D5D5]',
        JavaScript: "bg-[#F1CA82]",
        TypeScript: "bg-[#A8D9D1]",
    };
    const filteredTags = Object.entries(allTags).filter(([tag]) =>
        visibleTags.includes(tag)
      );
  return (
    <Link href={linkUrl} passHref>
      <div className="drop-shadow-[4px_4px_0px_rgba(44,151,190,1)] ">
        <div className="border-2 border-main  rounded-lg h-[500px] w-[400px] bg-basecolor px-6 py-4 ">
          <section className="flex flex-col gap-y-4">
            <Image
              src={imageUrl}
              alt={altText}
              width="376"
              height="237"
              className="rounded"
            />
            <div className="text-[32px] text-main">Works</div>
            <div className="border border-second"></div>
            <div className="text-[24px] text-text_color">{description}</div>
            <div className="flex gap-x-2">
                {filteredTags.map(([tag,style], index) => (
                    <span key={index} className={`rounded-md text-6 text-text_color py-1 px-1 ${style}`}>
                        {tag}

                    </span>
                ))
                }

            </div>
          </section>
        </div>
      </div>
    </Link>
  );
};
