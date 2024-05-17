"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, useCallback } from "react";

const FlareCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e?.target as Element;

    setIsPointer(window.getComputedStyle(target).getPropertyValue("cursor") === "pointer");
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const flareSize = isPointer ? 0 : 40;

  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  return (
    <div
      className={cn(
        "hidden md:block fixed border-2 z-[100] border-black/10 dark:border-white/10 bg-transparent  rounded-full mix-blend-normal pointer-events-none -translate-x-1/2 -translate-y-1/2 backdrop-filter backdrop-blur-[2px] [transition:width_0.2s_ease-in-out,_height_0.2s_ease-in-out]",
        {
          "hidden !opacity-0 [transition:width_0.2s_ease-in-out,_height_0.2s_ease-in-out,_opacity_0.2s_ease-in-out]":
            isPointer,
        }
      )}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
    />
  );
};

export default FlareCursor;

/* .flare {
  position: fixed;
  border: 2px solid #ffffff2b;
  border-radius: 50%;
  mix-blend-mode: screen;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 99999999 !important;
  backdrop-filter: blur(1px);
  background-color: #0000005e;
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
  cursor: none !important;
}

.flare.pointer {
  display: none;
  opacity: 0 !important;
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out, opacity 0.2s ease-in-out;
} */
