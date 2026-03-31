"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function () {
  const { resolvedTheme } = useTheme();
  const [src, setSrc] = useState("/tristero.png");

  useEffect(() => {
    setSrc(resolvedTheme === "dark" ? "/tristeroLight.png" : "/tristero.png");
  });

  return <img src={src} alt="Tristero Logo" width={24} height={24} />;
}
