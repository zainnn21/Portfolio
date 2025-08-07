import Particles from "../elements/Particles/Particles";

const BackgroundLayout = () => {
  return (
    <div className="w-full h-full relative bg-slate-950">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};
export default BackgroundLayout;
