"use client";

import React, { useCallback, useState, memo } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface CursorProps {}

const FramerCursor: React.FC<CursorProps> = memo(() => {
   const [isPointer, setIsPointer] = useState<boolean>(false);
   const cursorX = useMotionValue<number>(-100);
   const cursorY = useMotionValue<number>(-100);

   const springConfig = { damping: 100, stiffness: 1000 };
   const cursorXSpring = useSpring(cursorX, springConfig);
   const cursorYSpring = useSpring(cursorY, springConfig);

   const moveCursor = useCallback(
      (e: MouseEvent) => {
         cursorX.set(e.clientX - 16);
         cursorY.set(e.clientY - 16);

         // Check if the cursor is over specific elements
         const elements = document.elementsFromPoint(e.clientX, e.clientY);
         const isOverTargetElement = elements.some(
            (element) =>
               ["h1", "button", "a", "input", "label"].includes(element.tagName.toLowerCase()) ||
               element.hasAttribute("data-cursor"),
         );

         setIsPointer(isOverTargetElement);
      },
      [cursorX, cursorY],
   );

   React.useEffect(() => {
      window.addEventListener("mousemove", moveCursor);

      return () => {
         window.removeEventListener("mousemove", moveCursor);
      };
   }, [moveCursor]);

   const variants: Variants = {
      normal: {
         scale: 1,
         transition: {
            duration: 0.2,
            ease: "easeOut",
         },
      },
      pointer: {
         scale: 0.5,
         transition: {
            duration: 0.2,
            ease: "easeOut",
         },
      },
   };

   return (
      <AnimatePresence>
         <motion.div
            className="pointer-events-none fixed z-[10001] hidden md:block"
            initial="normal"
            animate={isPointer ? "pointer" : "normal"}
            exit="normal"
            transition={{ duration: 0.2 }}
            variants={variants}
            style={{
               translateX: cursorXSpring,
               translateY: cursorYSpring,
            }}
         >
            <div
               className={cn(
                  "mix-blend-mode-difference bg-blend-mode-difference size-9 rounded-full border bg-foreground/5 backdrop-blur-sm transition-all duration-200",
               )}
            />
         </motion.div>
      </AnimatePresence>
   );
});

export default FramerCursor;


// "use client";

// import React, { useCallback, useState, memo } from "react";
// import { AnimatePresence, motion, useMotionValue, useSpring, Variants } from "framer-motion";
// import { cn } from "@/lib/utils";

// interface CursorProps {}

// const Cursor: React.FC<CursorProps> = memo(() => {
//   const [isPointer, setIsPointer] = useState<boolean>(false);
//   const cursorX = useMotionValue<number>(-100);
//   const cursorY = useMotionValue<number>(-100);

//   const springConfig = { damping: 100, stiffness: 1000 };
//   const cursorXSpring = useSpring(cursorX, springConfig);
//   const cursorYSpring = useSpring(cursorY, springConfig);

//   const moveCursor = useCallback(
//     (e: MouseEvent) => {
//       cursorX.set(e.clientX - 16);
//       cursorY.set(e.clientY - 16);

//       // Check if the cursor is over specific elements
//       const elements = document.elementsFromPoint(e.clientX, e.clientY);
//       const isOverTargetElement = elements.some(
//         (element) =>
//           ["h1", "button", "a", "input", "label"].includes(element.tagName.toLowerCase()) ||
//           element.hasAttribute("data-cursor")
//       );

//       setIsPointer(isOverTargetElement);
//     },
//     [cursorX, cursorY]
//   );

//   React.useEffect(() => {
//     window.addEventListener("mousemove", moveCursor);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//     };
//   }, [moveCursor]);

//   const variants: Variants = {
//     normal: {
//       scale: 1,
//       transition: {
//         duration: 0.2,
//         ease: "easeOut",
//       },
//     },
//     pointer: {
//       scale: 0.5,
//       transition: {
//         duration: 0.2,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="hidden md:block pointer-events-none fixed z-[10001]"
//         initial="normal"
//         animate={isPointer ? "pointer" : "normal"}
//         exit="normal"
//         transition={{ duration: 0.2 }}
//         variants={variants}
//         style={{
//           translateX: cursorXSpring,
//           translateY: cursorYSpring,
//         }}
//       >
//         <div
//           className={cn(
//             "mix-blend-mode-difference bg-blend-mode-difference backdrop-blur-sm size-10 border border-black/10 dark:border-white/30 bg-black/30 transition-all duration-200 rounded-full"
//           )}
//         />
//       </motion.div>
//     </AnimatePresence>
//   );
// });

// export default Cursor;

// "use client";

// import React, { useCallback, useEffect, useState, memo } from "react";
// import { AnimatePresence, motion, useMotionValue, useSpring, Variants } from "framer-motion";
// import { cn } from "@/lib/utils";

// interface CursorProps {}

// const Cursor: React.FC<CursorProps> = memo(() => {
//   const [isPointer] = useState<boolean>(false);
//   const cursorX = useMotionValue<number>(-100);
//   const cursorY = useMotionValue<number>(-100);

//   const springConfig = { damping: 100, stiffness: 1000 };
//   const cursorXSpring = useSpring(cursorX, springConfig);
//   const cursorYSpring = useSpring(cursorY, springConfig);

//   const moveCursor = useCallback(
//     (e: MouseEvent) => {
//       cursorX.set(e.clientX - 16);
//       cursorY.set(e.clientY - 16);
//     },
//     [cursorX, cursorY]
//   );

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => moveCursor(e);
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [moveCursor]);

//   // useEffect(() => {
//   //   const elements = Array.from(
//   //     document.querySelectorAll<HTMLElement>('h1,button,a,input,label,[data-cursor="pointer"]')
//   //   );

//   //   const handleMouseEnter = () => {
//   //     setIsPointer(true);
//   //   };

//   //   const handleMouseLeave = () => {
//   //     setIsPointer(false);
//   //   };

//   //   elements.forEach((element) => {
//   //     element.addEventListener("mouseenter", handleMouseEnter, false);
//   //     element.addEventListener("mouseleave", handleMouseLeave, false);
//   //   });

//   //   return () => {
//   //     elements.forEach((element) => {
//   //       element.removeEventListener("mouseenter", handleMouseEnter, false);
//   //       element.removeEventListener("mouseleave", handleMouseLeave, false);
//   //     });
//   //   };
//   // }, []);

//   const variants: Variants = {
//     normal: {
//       scale: 1,
//       transition: {
//         duration: 0.2,
//         ease: "easeOut",
//       },
//     },
//     pointer: {
//       scale: 0.5,
//       transition: {
//         duration: 0.2,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="hidden md:block pointer-events-none fixed z-[10001]"
//         initial="normal"
//         animate={isPointer ? "pointer" : "normal"}
//         exit="normal"
//         transition={{ duration: 0.2 }}
//         variants={variants}
//         style={{
//           translateX: cursorXSpring,
//           translateY: cursorYSpring,
//         }}
//       >
//         <div
//           className={cn(
//             "mix-blend-mode-difference bg-blend-mode-difference backdrop-blur-sm size-6 border  bg-foreground/5 transition-all duration-200 rounded-full"
//           )}
//         />
//       </motion.div>
//     </AnimatePresence>
//   );
// });

// export default Cursor;
