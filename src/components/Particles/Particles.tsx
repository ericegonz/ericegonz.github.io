import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import styles from "./Particles.module.css";
import { particleConfig } from "./config.mts";

function HeroParticles() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          className={styles.container}
          // width={"100%"}
          // style={{ width: "100%", height: "100px" }}
          options={particleConfig}
        />
      )}
    </>
  );
}

export default HeroParticles;
