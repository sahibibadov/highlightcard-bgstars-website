import { ParticlesStars } from "@/components/particle-natural/Particles";

const Stars2 = () => {
  return (
    <div className="grid flex-1 place-items-center">
      <ParticlesStars className="fixed inset-0 -z-50" />
      <h2 className="text-5xl font-bold">Stars 2</h2>
    </div>
  );
};
export default Stars2;
