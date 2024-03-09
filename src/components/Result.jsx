"use client";

import { useState, useRef } from "react";
import { NameTag } from "components";
import html2canvas from "html2canvas";

import { useMailState } from "stores";

const Result = ({ goNext, faces, imgUrl }) => {
  const [isSimilarOpen, setIsSimilarOpen] = useState(true);

  const { mail } = useMailState();

  const componentRef = useRef();

  const captureComponent = () => {
    html2canvas(componentRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = mail + ".png";
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center">
      <span className="mt-12 text-3xl font-semibold shadow-2xl shadow-blue-500/50">
        스파이크에서 제작한 명함이에요!
      </span>
      <span className="mt-2 mb-12 text-xl font-thin shadow-2xl shadow-blue-500/50">
        다운로드 버튼으로 명함을 다운받을 수 있어요
      </span>
      <div ref={componentRef} className="shadow-2xl shadow-blue-500/50">
        <NameTag faces={faces} imgUrl={imgUrl} isSimilarOpen={isSimilarOpen} />
      </div>
      <button
        className="absolute text-xl duration-200 ease-in-out bg-blue-500 hover:bg-blue-600 w-custom h-14 bottom-28 rounded-xl"
        onClick={() => setIsSimilarOpen((prev) => !prev)}
      >
        유명인 on/off
      </button>
      <div className="absolute flex justify-between bottom-2 w-custom ">
        <button
          onClick={captureComponent}
          className="mb-8 text-xl duration-200 ease-in-out bg-blue-500 hover:bg-blue-600 w-60 rounded-xl h-14 "
        >
          다운로드
        </button>
        <button
          className="mb-8 text-xl duration-200 ease-in-out bg-blue-500 hover:bg-blue-600 w-60 rounded-xl h-14 "
          onClick={() => goNext()}
        >
          다시 만들기
        </button>
      </div>
    </div>
  );
};

export default Result;
