import {
  useNameState,
  useJobState,
  useMailState,
  useContactState,
} from "stores";
import Image from "next/image";

const NameTag = ({ faces, isSimilarOpen, imgUrl }) => {
  const { name } = useNameState();
  const { job } = useJobState();
  const { mail } = useMailState();
  const { contact } = useContactState();

  return (
    <div className="w-custom h-custom bg-white text-zinc-500 flex justify-between pr-10">
      <div className="flex flex-col text-black pt-8 pl-8">
        <span className="text-4xl font-semibold">
          {name.split("").join(" ")}
        </span>
        <span className="text-xl">{contact}</span>
        <div className="mt-28 flex flex-col font-semibol">
          <span>{job}</span>
          <span>{mail}</span>
        </div>
      </div>
      <div className="flex flex-col text-black pt-8 pl-8">
        <div className="h-12 mb-4">
          {faces && isSimilarOpen && (
            <>
              <div>
                <span>닮은 유명인 : {faces[0].celebrity.value}</span>
              </div>
              <span>
                닮음도 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;
                {Math.floor(faces[0].celebrity.confidence * 100)}%
              </span>
            </>
          )}
        </div>
        <div className="w-32 h-40 relative overflow-hidden rounded-lg	">
          <Image fill alt="" src={imgUrl} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default NameTag;
