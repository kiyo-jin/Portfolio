import Image from "next/image";
export default function Profile() {
  return (
    <div className="p-6">
      <p className="text-main text-[64px] font-bold">Profile</p>
      <div className="flex gap-x-[128px]">
        <div>
          <Image
            src="/images/face.svg"
            alt="個人写真"
            width={390}
            height={300}
            className="py-[8px]"
          />
        </div>
        <div>
          <div className="flex flex-col gap-y-[14px]">
            <div>
              <p className="text-main text-[32px]">神宮司真聖</p>

              <p className="text-main text-[24px]">じんぐうじ　まさきよ</p>
              <div className="border border-second"></div>
            </div>
            <div>
              <p className="text-6 text-text_color">
                これは自己紹介のサンプルテキストです。これは自己紹介のサンプルテキストで、サンプルテキストサンプルテキストです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
