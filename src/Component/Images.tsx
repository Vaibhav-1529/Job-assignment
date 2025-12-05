"use client";
import { error, useImageContext } from "@/contextapi/GetImages";

function Images() {
  const { SetCount, Data } = useImageContext();

  function handleclick(item: any) {
    SetCount(item.count);
  }

  function getSrc(item: any) {
    const img = item?.images?.[0];
    if (!img) return error.src;
    if (img.error) return error.src;
    if (img.ready) return img.url;
    return error.src;
  }

  return (
    <div className="relative w-[95px] h-[76px]">

      <div className="group absolute top-0 left-0 translate-x-[4px] translate-y-[4px] z-20">
        <div className="border-[1px] border-black w-[38px] h-[38px] rounded-full overflow-hidden">
          <img
            onClick={() => handleclick(Data[0])}
            src={getSrc(Data[0])}
            className="object-cover w-full h-full scale-[1.3]"
          />
        </div>
        <span className="absolute left-1/2 -top-6 -translate-x-1/2 px-2 py-1 text-xs bg-white text-black rounded opacity-0 z- group-hover:opacity-100 transition">
          {Data[0]?.name}
        </span>
      </div>

      <div className="group absolute top-0 right-0 -translate-x-[4px] translate-y-[4px] z-10">
        <div className="border-[1px] border-black w-[38px] h-[38px] rounded-full overflow-hidden">
          <img
            onClick={() => handleclick(Data[1])}
            src={getSrc(Data[1])}
            className="object-cover w-full h-full scale-[1.3]"
          />
        </div>
        <span className="absolute left-1/2 -top-6 -translate-x-1/2 px-2 py-1 text-xs bg-white text-black rounded opacity-0 z- group-hover:opacity-100 transition">
          {Data[1]?.name}
        </span>
      </div>

      <div className="group absolute top-0 left-0 translate-x-[4px] translate-y-[32px] z-10">
        <div className="border-[1px] border-black w-[38px] h-[38px] rounded-full overflow-hidden">
          <img
            onClick={() => handleclick(Data[2])}
            src={getSrc(Data[2])}
            className="object-cover w-full h-full scale-[1.3]"
          />
        </div>
        <span className="absolute left-1/2 top-10 -translate-x-1/2 px-2 py-1 text-xs bg-white text-black rounded opacity-0 z- group-hover:opacity-100 transition">
          {Data[2]?.name}
        </span>
      </div>

      <div className="group absolute top-0 right-0 -translate-x-[4px] translate-y-[32px] z-0">
        <div className="border-[1px] border-black w-[38px] h-[38px] rounded-full overflow-hidden">
          <img
            onClick={() => handleclick(Data[3])}
            src={getSrc(Data[3])}
            className="object-cover w-full h-full scale-[1.3]"
          />
        </div>
        <span className="absolute left-1/2 top-10 -translate-x-1/2 px-2 py-1 text-xs bg-white text-black rounded opacity-0 z- group-hover:opacity-100 transition">
          {Data[3]?.name}
        </span>
      </div>

    </div>
  );
}

export default Images;
