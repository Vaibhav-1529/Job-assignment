"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export const error = {
  src: "https://static.vecteezy.com/system/resources/previews/026/526/151/non_2x/error-icon-vector.jpg",
};

const defaultBigImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png";

type ImageContextType = {
  selectBig: string;
  SetSelectBig: (elem: string) => void;
  count: number;
  SetCount: (elem: number) => void;
  Data: any[];
  SetData: (elem: any[]) => void;
  error: typeof error;
};

export const ImageContext = createContext<ImageContextType | undefined>(
  undefined
);

export const ImageProvider = ({ children }: { children: React.ReactNode }) => {
  const [Data, SetData] = useState<any[]>([]);
  const [selectBig, SetSelectBig] = useState<string>(defaultBigImage);
  const [count, SetCount] = useState<number>(1);
  const [attempts, setAttempts] = useState(0);

  const MAX = 3;

  function checkerror(data: any[] | undefined) {
    if (!Array.isArray(data)) return false;
    return data.some((d) => d.images?.some((img: any) => img.error));
  }

  async function fetchdata() {
    try {
      const res = await fetch("/api/route");
      if (!res.ok) throw new Error("Fetch failed");
      const json = await res.json();

      if (Array.isArray(json) && json.length > 0) {
        SetData(json);
      }
    } catch {}
  }

  useEffect(() => {
    if (Data.length === 0 && attempts < MAX) {
      const timer = setTimeout(() => {
        fetchdata();
        setAttempts((a) => a + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [attempts, Data]);

  useEffect(() => {
    if (Data.length === 0) return;

    const hasError = checkerror(Data);

    if (hasError && attempts >= MAX) {
      SetSelectBig(error.src);
      return;
    }

    if (!hasError) {
      const index = Math.max(0, count - 1);
      const url = Data[index]?.images?.[0]?.url;
      SetSelectBig(url ?? defaultBigImage);
    }
  }, [Data, count]);

  return (
    <ImageContext.Provider
      value={{
        selectBig,
        SetSelectBig,
        count,
        SetCount,
        Data,
        SetData,
        error,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const ctx = useContext(ImageContext);
  if (!ctx) throw new Error("useImageContext must be used within ImageProvider");
  return ctx;
};
