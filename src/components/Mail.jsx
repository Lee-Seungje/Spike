"use client";

import { useMailState } from "stores";

const Mail = ({ goNext, goPrev }) => {
  const { mail, setMail } = useMailState();

  return (
    <div className="flex flex-col	items-center relative">
      <input
        className="standard:pl-4 standard:w-screen ease-in-out duration-200 focus:border-b border-blue-600 w-custom h-20 bg-neutral-900 text-4xl outline-none mt-24 "
        value={mail}
        placeholder="이메일을 입력해주세요."
        onChange={(e) => setMail(e.target.value)}
        maxLength={25}
      />
      <div className="standard:w-screen standard:justify-around absolute bottom-2 flex w-custom justify-between	">
        <button
          className="standard:w-5/12 ease-in-out duration-200	hover:bg-blue-600 mb-12 bg-blue-500 w-60 rounded-xl h-14 text-xl "
          onClick={goPrev}
        >
          이전
        </button>
        <button
          className="standard:w-5/12 ease-in-out duration-200	hover:bg-blue-600 mb-12 bg-blue-500 w-60 rounded-xl h-14 text-xl "
          onClick={goNext}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Mail;
