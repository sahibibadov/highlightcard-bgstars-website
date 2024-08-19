import AnimatedReveal from "@/components/framer-component/Framer-component.tsx";
import { ParticlesStars } from "@/components/particle-natural/Particles";
// import { Spotlight, SpotlightCard } from "@/components/spotlight-card-1/spotlight";
import { HighlightGroup, HighlighterItem } from "@/components/spotlight-card-highlighter/highlighter";
// import { SpotLightItem } from "@/components/spotlight-card/spotlight-card";

import Link from "next/link";

// const items = [
//   { name: "Item-1" },
//   { name: "Item-2" },
//   { name: "Item-3" },
//   { name: "Item-4" },
//   { name: "Item-5" },
//   { name: "Item-6" },
//   { name: "Item-7" },
//   { name: "Item-8" },
// ];
const tiers = [
  {
    name: "Free",
    price: 99,
    description: "Free forever, for teams just getting started",
    features: ["10k Events per month", "1 Alert"],
    cta: "Get Started for Free",
  },
  {
    name: "Free",
    price: 99,
    description: "Free forever, for teams just getting started",
    features: ["10k Events per month", "1 Alert"],
    cta: "Get Started for Free",
  },
  {
    name: "Free",
    price: 99,
    description: "Free forever, for teams just getting started",
    features: ["10k Events per month", "1 Alert"],
    cta: "Get Started for Free",
  },
];
function Home() {
  return (
    <div className="my-20">
      {/* spotlight-1 */}
      <AnimatedReveal distance={0} delay={0.6} duration={1} blur="6px">
        <HighlightGroup className="grid h-full gap-6 md:grid-cols-12 group">
          {tiers.map((tier, i) => (
            <div key={tier.name} className="h-full md:col-span-6 lg:col-span-4 group/item">
              <HighlighterItem>
                <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
                  <ParticlesStars
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
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          ))}
          <div className="h-full md:col-span-6 lg:col-span-12 group/item">
            <HighlighterItem>
              <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
                <ParticlesStars
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
        </HighlightGroup>
      </AnimatedReveal>

      {/* spotlight-2 */}
      {/* <div className="grid grid-cols-1 gap-5 my-20 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <SpotLightItem key={i}> {item.name}</SpotLightItem>
        ))}
      </div> */}

      {/* spotlight-3 */}
      {/* <Spotlight className="grid h-full gap-6 my-12 md:grid-cols-2 lg:grid-cols-4 group">
        {items.map((tier, i) => (
          <SpotlightCard key={tier.name}>
            <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
              <div className="flex items-center justify-center h-40 ">{tier.name}</div>
            </div>
          </SpotlightCard>
        ))}
      </Spotlight> */}
    </div>
  );
}

export default Home;
