import Image from "next/image";
import HeroVideo from "@/components/common/Top/heroVideo";

export default function Hero() {
    return (
        <div className="relative w-full h-[710px] ">
            {/* <Image
            src="/images/hero_header.svg"
            alt="背景画像"
            fill
            className="object-cover"
            priority
            /> */}
            <HeroVideo />
            <div className="absolute top-0 left-0 px-6">
            <div className="text-second text-[96px] font-head -mb-6">Portfoilio</div>
            <div className="text-main text-[96px] font-head">
                <div className="flex flex-col  ">
                <p className="-mb-9">Jinguji</p>
                <p>Masakiyo</p>
                </div>
                <p className="text-[40px] -mt-4">Front-end enginner</p>
            </div>
            </div>
        </div>
    );
}
