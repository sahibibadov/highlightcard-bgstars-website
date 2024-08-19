import AnimatedReveal from "@/components/framer-component/Framer-component.tsx";
import { ParticlesStars } from "@/components/particle-natural/Particles";

const Stars2 = () => {
  return (
    <div className="grid flex-1 place-items-center">
      <ParticlesStars className="fixed inset-0 -z-50" />
      <AnimatedReveal distance={0} delay={0.6} duration={1} blur="6px" asChild>
        <h2 className="text-5xl font-bold">Stars 2</h2>
      </AnimatedReveal>
    </div>
  );
};
export default Stars2;
