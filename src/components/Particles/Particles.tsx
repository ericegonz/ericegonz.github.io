import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import styles from "./Particles.module.css";
import { particleConfig } from "./config.mts";

const HeroParticles = () => {
  return (
    <ParticlesProvider
      init={async (engine) => {
        await loadSlim(engine);
      }}
    >
      <Particles className={styles.container} options={particleConfig} />
    </ParticlesProvider>
  );
};

export default HeroParticles;
