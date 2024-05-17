"use client";

import React, { useRef, useState, useEffect, PropsWithChildren } from "react";
import MousePosition from "./mouse-position";

type HighlightGroupProps = {
  children: React.ReactNode;
  className?: string;
  refresh?: boolean;
};

export const HighlightGroup: React.FC<HighlightGroupProps> = ({
  children,
  className = "",
  refresh = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = MousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);

  useEffect(() => {
    containerRef.current &&
      setBoxes(Array.from(containerRef.current.children).map((el) => el as HTMLElement));
  }, []);

  useEffect(() => {
    initContainer();
    window.addEventListener("resize", initContainer);

    return () => {
      window.removeEventListener("resize", initContainer);
    };
  }, [setBoxes]);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition]);

  useEffect(() => {
    initContainer();
  }, [refresh]);

  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  const onMouseMove = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
        boxes.forEach((box) => {
          const boxX = -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
          const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
          box.style.setProperty("--mouse-x", `${boxX}px`);
          box.style.setProperty("--mouse-y", `${boxY}px`);
        });
      }
    }
  };

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
};

type HighlighterItemProps = {
  children: React.ReactNode;
  className?: string;
};

export const HighlighterItem: React.FC<PropsWithChildren<HighlighterItemProps>> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative bg-zinc-800 rounded-xl p-px before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48 before:bg-zinc-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:[background:_radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),theme(colors.zinc.400),transparent)] after:group-hover:opacity-100 after:z-10 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

// example-1
{
  /* <HighlightGroup className="grid h-full grid-cols-4 gap-6 group">
        {tiers.map((tier, i) => (
          // <div key={tier.name} className="h-full group/item ">
          <HighlighterItem key={tier.name}>
            <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
              <div className="flex flex-col h-40">item</div>
            </div>
          </HighlighterItem>
          // </div>
        ))}
      </HighlightGroup> */
}
// example stars bg
/* 
const tiers = [
  {
    name: "Free",
    price: 0,
    description: "Free forever, for teams just getting started",
    features: ["10k Events per month", "1 Alert"],
    cta: "Get Started for Free",
  },
  {
    name: "Pro",
    price: 20,
    description: "For larger teams with increased usage",
    features: ["50k Events per month", "10 Alerts"],
    cta: "Try Pro for 14 days",
  },
  {
    name: "Enterprise",
    price: 50,
    description: "For businesses with custom needs",
    features: ["500k Events per month", "Unlimited Alerts"],
    cta: "Scale Up",
  },
];
const _useColor = (hash: string): [number, number, number] => {
  return useMemo(
    () => [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * 256),
    ],
    [hash]
  );
}; */
{
  /* <HighlightGroup className="grid h-full gap-6 md:grid-cols-12 group">
       {tiers.map((tier, i) => (
          <div key={tier.name} className="h-full md:col-span-6 lg:col-span-4 group/item">
            <HighlighterItem>
              <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
                <Particles
                  className="absolute inset-0 transition-opacity duration-1000 ease-in-out -z-10 opacity-10 group-hover/item:opacity-100"
                  quantity={(i + 1) ** 2 * 10}
                  color={["#34d399", "#fde047", "#f43f5e"][i]}
                  vy={-0.2}
                />
                <div className="flex flex-col">
           
                  <div
                    className="absolute bottom-0 w-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none left-1/2 -z-10 aspect-square"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px]" />
                  </div>
         

                  <div className="p-8">
                    <h3 id={tier.name} className="text-lg font-semibold leading-8">
                      {tier.name}
                    </h3>

                    <h3 className="inline-flex items-baseline pb-1 mt-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
                      <span className="text-4xl">${tier.price}</span>
                      <span className="text-lg">/ month</span>
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-zinc-400">{tier.description}</p>
                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-zinc-300">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      className="mt-16 w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                      href="/overview"
                    >
                      Get Started{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </div>
        ))}
        <div className="h-full md:col-span-6 lg:col-span-12 group/item" data-aos="fade-down">
          <HighlighterItem>
            <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
              <Particles
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out -z-10 opacity-10 group-hover/item:opacity-100"
                quantity={200}
              />
              <div className="flex flex-col">
       
                <div
                  className="absolute bottom-0 w-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none left-1/2 -z-10 aspect-square opacity-70"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px] opacity-70" />
                </div>
           

                <div className="p-8">
                  <h3 className="text-lg font-semibold leading-8">Self Hosted</h3>

                  <p className="mt-4 text-sm leading-6 text-zinc-400">
                    Self host and maintain Highstorm on your own servers
                  </p>
                  <div className="mt-16 ">
                    <Link
                      className="font-medium transition duration-150 ease-in-out whitespace-nowrap text-zinc-100 hover:text-white group"
                      href="https://github.com/chronark/highstorm"
                    >
                      Deploy your own
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup> */
}
