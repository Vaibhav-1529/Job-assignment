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
    <div className="relative w-[95px] h-[76px] overflow-hidden">

      <div className="absolute border-[1px] border-black w-[38px] h-[38px] rounded-full overflow-hidden top-0 left-0 transform translate-x-[4px] translate-y-[4px] z-20">
        <img
          onClick={() => handleclick(Data[0])}
          src={getSrc(Data[0])}
          className="object-cover w-full h-full scale-[1.3]"
        />
      </div>
      <p>{Data[0]?.name}</p>

      <div className="absolute border-[1px] border-black w-[38px] h-[38px] rounded-full overflow-hidden top-0 right-0 transform -translate-x-[4px] translate-y-[4px] z-10">
        <img
          onClick={() => handleclick(Data[1])}
          src={getSrc(Data[1])}
          className="object-cover w-full h-full scale-[1.3]"
        />
      </div>
      <p>{Data[1]?.name}</p>

      <div className="absolute border-[1px] border-black w-[38px] h-[38px] rounded-full overflow-hidden top-0 left-0 transform translate-x-[4px] translate-y-[32px] z-10">
        <img
          onClick={() => handleclick(Data[2])}
          src={getSrc(Data[2])}
          className="object-cover w-full h-full scale-[1.3]"
        />
      </div>
      <p>{Data[2]?.name}</p>

      <div className="absolute border-[1px] border-black w-[38px] h-[38px] rounded-full overflow-hidden top-0 right-0 transform -translate-x-[4px] translate-y-[32px] z-0">
        <img
          onClick={() => handleclick(Data[3])}
          src={getSrc(Data[3])}
          className="object-cover w-full h-full scale-[1.3]"
        />
      </div>
      <p>{Data[3]?.name}</p>

    </div>
  );
}

export default Images;
