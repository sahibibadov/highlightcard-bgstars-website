"use client";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";

const LenisCursor = () => {
  const cursor = useRef<HTMLDivElement>(null);
  //   const [isGrab, setIsGrab] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  const onMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      gsap.to(cursor.current, {
        x: clientX,
        y: clientY,
        duration: hasMoved ? 0.5 : 0,
        ease: "expo.out",
      });
      setHasMoved(true);
    },
    [hasMoved]
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove, false);

    return () => {
      window.removeEventListener("mousemove", onMouseMove, false);
    };
  }, [hasMoved, onMouseMove]);

  useEffect(() => {
    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  //   verilen elementlere geldiginde olcusun balacalasdirmaq
  useEffect(() => {
    let elements = [];

    const onMouseEnter = () => {
      setIsPointer(true);
    };
    const onMouseLeave = () => {
      setIsPointer(false);
    };

    elements = Array.from(
      document.querySelectorAll("button,a,input,label,[data-cursor='pointer']")
    );

    elements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnter, false);
      element.addEventListener("mouseleave", onMouseLeave, false);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseEnter, false);
        element.removeEventListener("mouseleave", onMouseLeave, false);
      });
    };
  }, []);

  //   useEffect(() => {
  //     let elements = [];

  //     const onMouseEnter = () => {
  //       setIsGrab(true);
  //     };
  //     const onMouseLeave = () => {
  //       setIsGrab(false);
  //     };

  //     elements = [...document.querySelectorAll("button,a,input,label,[data-cursor='pointer']")];
  //     console.log(elements);

  //     elements.forEach((element) => {
  //       element.addEventListener("mouseenter", onMouseEnter, false);
  //       element.addEventListener("mouseleave", onMouseLeave, false);
  //     });

  //     return () => {
  //       elements.forEach((element) => {
  //         element.removeEventListener("mouseenter", onMouseEnter, false);
  //         element.removeEventListener("mouseleave", onMouseLeave, false);
  //       });
  //     };
  //   }, []);

  return (
    <div
      style={{ opacity: hasMoved ? 1 : 0 }}
      className="fixed top-0 left-0 z-50 w-full h-screen overflow-hidden pointer-events-none"
    >
      <div ref={cursor}>
        <div
          className={cn(
            "hidden md:block absolute size-10 border border-black/10 dark:border-white/30 bg-transparent rounded-full backdrop-blur-[3px]   transition-transform ease-[cubic-bezier(0.19,1,0.22,1)] duration-500 -translate-x-2/4 -translate-y-2/4",
            { "scale-50 -translate-x-2/4 -translate-y-2/4": isPointer }
          )}
        />
      </div>
    </div>
  );
};
export default LenisCursor;
// css ucun taglar ve cssi
{
  /* <div style={{ opacity: hasMoved ? 1 : 0 }} className={s.container}>
      <div ref={cursor}>
        <div className={cn(s.cursor, isPointer && s.pointer)} />
      </div>
    </div> 
    
    css=========
    :root {
  --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
}

.container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 5;
  pointer-events: none;
  overflow: hidden;

  & .cursor {
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.103);
    border: 1px solid gray;

    transition: transform 600ms cubic-bezier(0.19, 1, 0.22, 1);
    backdrop-filter: blur(1px);

    &.pointer {
      transform: translate(-50%, -50%) scale(0.5);
    }
  }

  @media (hover: none) {
    display: none;
  }
}

    */
}
