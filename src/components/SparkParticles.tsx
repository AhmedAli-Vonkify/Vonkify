import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function SparkParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 pointer-events-none"
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          color: {
            value: ['#FF6B00', '#FFB800', '#FF8C40', '#FFC060'],
          },
          move: {
            enable: true,
            direction: 'top',
            random: true,
            straight: false,
            speed: { min: 0.4, max: 1.2 },
            outModes: { default: 'out' },
            drift: { min: -0.5, max: 0.5 },
          },
          number: {
            density: { enable: true, area: 1000 },
            value: 70,
          },
          opacity: {
            value: { min: 0.05, max: 0.55 },
            animation: {
              enable: true,
              speed: 0.7,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 2.5 },
            animation: {
              enable: true,
              speed: 1.5,
              sync: false,
            },
          },
          shape: { type: 'circle' },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            repulse: {
              distance: 80,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
