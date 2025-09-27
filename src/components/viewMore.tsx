import Link from "next/link";

const ViewMore = ({to}: { to: string }) => {
  return(
    // 文字の大きさが含まれてそうなのでpxとpyの値を変更した
    <div className="flex justify-center">

        <Link href={to} className="bg-main px-10 py-3 rounded-[40px] text-basecolor text-[32px] w-auto h-[70px] ">View More</Link>
    </div>
  );
};

export default ViewMore;
