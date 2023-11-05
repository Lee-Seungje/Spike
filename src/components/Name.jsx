"use client";

import { useNameState } from "stores";
import Image from "next/image";

const Name = ({ goNext }) => {
  const { name, setName } = useNameState();

  return (
    <div className="flex flex-col	items-center relative">
      <input
        className="standard:pl-4 ease-in-out duration-200 focus:border-b border-blue-600 w-custom standard:w-screen h-20 bg-neutral-900 text-4xl outline-none mt-24 "
        value={name}
        placeholder="이름을 입력해주세요."
        onChange={(e) => setName(e.target.value)}
        maxLength={6}
      />
      <button
        className="ease-in-out duration-200	hover:bg-blue-600 bg-blue-500 w-custom h-20 text-xl absolute bottom-12"
        onClick={goNext}
      >
        다음
      </button>
    </div>
  );
};

export default Name;
