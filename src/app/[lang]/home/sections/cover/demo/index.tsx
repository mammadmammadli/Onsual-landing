import Image from "next/image";
import Screen from "@/app/[lang]/home/sections/cover/demo/screen";

const Demo = () => {
  return (
    <div className="flex justify-center relative z-[1]">
      <div className="h-[326px] w-[290px] relative">
        <div className="relative z-[2] pointer-events-none">
          <Image
            className="w-auto h-auto"
            priority
            src="/images/iphone14pro.png"
            alt="cover"
            height={590}
            width={290}
            sizes={"(max-width: 767px) 100vw, 290px"}
          />
        </div>
        <Screen />
      </div>
    </div>
  );
};

export default Demo;
