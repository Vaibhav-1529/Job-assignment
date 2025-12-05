"use client";
import React, { useContext, useEffect, useState } from "react";
import Images from "./Images";
import Content from "./Content";
import { useImageContext } from "@/contextapi/GetImages";

function Container() {
  const { selectBig } = useImageContext();
    return (
    <div className="w-[600px] h-auto py-8 px-4 bg-black flex justify-between items-center">
      <div className="flex justify-start gap-4 w-full h-full">
        <Images/>
        <Content/>
      </div>

      <div className="px-2">
        <img
          width="100"
          height="100"
          className="rounded-full"
          src={selectBig}
          alt=""
        />
      </div>
    </div>
  );
}

export default Container;
