import AnimatedReveal from "@/components/framer-component/Framer-component.tsx";
import ParticlesContainer from "@/components/ts-particlas/ParticlesContainer";

const Stars3 = () => {
  return (
    <div className="grid flex-1 place-items-center">
      <ParticlesContainer />
      <AnimatedReveal distance={0} delay={0.6} duration={1} blur="6px" asChild>
        <h2 className="text-5xl font-bold">Stars 3</h2>
      </AnimatedReveal>
    </div>
  );
};
export default Stars3;
