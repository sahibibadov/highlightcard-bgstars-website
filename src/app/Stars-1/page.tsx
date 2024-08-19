import AnimatedReveal from "@/components/framer-component/Framer-component.tsx";
import { StarsCanvas } from "@/components/particle/star-canva";

const Stars1 = () => {
  return (
    <div className="grid flex-1 place-items-center">
      <StarsCanvas />
      <AnimatedReveal distance={0} delay={0.6} duration={1} blur="6px" asChild>
        <h2 className="text-5xl font-bold">Stars 1</h2>
      </AnimatedReveal>
    </div>
  );
};
export default Stars1;
