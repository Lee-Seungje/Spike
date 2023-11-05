"use client";

import Image from "next/image";

const Intro = ({ goNext }) => {
  return (
    <div className="flex flex-col items-center relative h-screen">
      <span className="text-xl font-thin mt-32 shadow-2xl shadow-blue-500/50">
        스파이크 명함제작
      </span>
      <span className="text-3xl font-semibold mt-2 shadow-2xl shadow-blue-500/50">
        꼭 필요한 정보만,
      </span>
      <span className="text-3xl font-semibold mt-1 shadow-2xl shadow-blue-500/50">
        효과적으로 어필하세요
      </span>
      <div className="w-96 h-48 relative mt-16 standard:w-10/12 standard:h-32">
        <Image fill src="/NameTag.png" alt="" />
      </div>
      <button
        className="ease-in-out duration-200	hover:bg-blue-600 mb-12 bg-blue-500 w-11/12 rounded-xl h-14 text-xl absolute bottom-2"
        onClick={goNext}
      >
        다음
      </button>
    </div>
  );
};

export default Intro;
