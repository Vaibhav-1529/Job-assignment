"use client";
import { useImageContext, error } from "@/contextapi/GetImages";

function Images() {
  const { Data, SetSelectBig,SetCount } = useImageContext();
  const active = Data.slice(0, 4);
  function handleclick = (item: any) => {
    if (item?.flag) {
      SetCount(item.count);
    }
  };
  return (
    <div className="relative w-[95px] h-[76px] overflow-hidden">
      <div className="absolute border-[1px] border-black w-[38px] h-[38px] rounded-full overflow-hidden top-0 left-0 translate-x-[4px] translate-y-[4px] z-20">
        <img
          onClick={() => handleclick(active[0])}
          src={active[0]?.flag ? active[0].src : error.src}
          alt=""
          className="object-cover w-full h-full scale-[1.3]"
        />
      </div>
      <p>{active[0]?.name}</p>

      <div className="absolute border-[1px] border-black w-[38px] h-[38px] rounded-full overflow-hidden top-0 right-0 -translate-x-[4px] translate-y-[4px] z-10">
        <img
          onClick={() => handleclick(active[1])}
          src={active[1]?.flag ? active[1].src : error.src}
          alt=""
          className="object-cover w-full h-full scale-[1.3]"
        />
      </div>
      <p>{active[1]?.name}</p>

      <div className="absolute border-[1px] border-black w-[38px] h-[38px] rounded-full overflow-hidden top-0 left-0 translate-x-[4px] translate-y-[32px] z-10">
        <img
          onClick={() => handleclick(active[2])}
          src={active[2]?.flag ? active[2].src : error.src}
          alt=""
          className="object-cover w-full h-full scale-[1.3]"
        />
      </div>
      <p>{active[2]?.name}</p>

      <div className="absolute border-[1px] border-black w-[38px] h-[38px] rounded-full overflow-hidden top-0 right-0 -translate-x-[4px] translate-y-[32px] z-0">
        <img
          onClick={() => handleclick(active[3])}
          src={active[3]?.flag ? active[3].src : error.src}
          alt=""
          className="object-cover w-full h-full scale-[1.3]"
        />
      </div>
      <p>{active[3]?.name}</p>
    </div>
  );
}

export default Images;
