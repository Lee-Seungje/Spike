"use client";

import { useState, useRef } from "react";
import { NameTag } from "components";
import html2canvas from "html2canvas";

const Result = ({ goNext, faces, imgUrl }) => {
  const [isSimilarOpen, setIsSimilarOpen] = useState(true);

  const componentRef = useRef();

  const captureComponent = () => {
    html2canvas(componentRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "명함.png";
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-semibold mt-12 shadow-2xl shadow-blue-500/50">
        스파이크에서 제작한 명함이에요!
      </span>
      <span className="text-xl font-thin mt-2 mb-12 shadow-2xl shadow-blue-500/50">
        다운로드 버튼으로 명함을 다운받을 수 있어요
      </span>
      <div ref={componentRef} className="shadow-2xl shadow-blue-500/50">
        <NameTag faces={faces} imgUrl={imgUrl} isSimilarOpen={isSimilarOpen} />
      </div>
      <button
        className="ease-in-out duration-200	hover:bg-blue-600 bg-blue-500 w-custom h-14 text-xl absolute bottom-28 rounded-xl"
        onClick={() => setIsSimilarOpen((prev) => !prev)}
      >
        유명인 on/off
      </button>
      <div className="absolute bottom-2 flex w-custom justify-between	">
        <button
          onClick={captureComponent}
          className="ease-in-out duration-200	hover:bg-blue-600 mb-8 bg-blue-500 w-60 rounded-xl h-14 text-xl "
        >
          다운로드
        </button>
        <button
          className="ease-in-out duration-200	hover:bg-blue-600 mb-8 bg-blue-500 w-60 rounded-xl h-14 text-xl "
          onClick={() => goNext()}
        >
          다시 만들기
        </button>
      </div>
    </div>
  );
};

export default Result;
