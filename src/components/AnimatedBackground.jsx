"use client";

import { useEffect, useRef, useState } from "react";

const PARTICLE_COUNT = 18;
const GLOW_SIZE = 720;
const LERP = 0.08;
const IDLE_FADE = 0.985;

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export default function AnimatedBackground() {
  const glowRef = useRef(null);
  const ambientRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(0);
  const pointerRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, active: false });
  const velocityRef = useRef(0);
  const idleRef = useRef(0);
  const sizeRef = useRef({ width: 0, height: 0 });
  const reducedMotionRef = useRef(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateReducedMotion = () => {
      const matches = mediaQuery.matches;
      reducedMotionRef.current = matches;
      setReducedMotion(matches);
    };

    updateReducedMotion();
    mediaQuery.addEventListener("change", updateReducedMotion);

    return () => mediaQuery.removeEventListener("change", updateReducedMotion);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    const updateSize = () => {
      sizeRef.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };

    const handlePointerMove = (event) => {
      const { width, height } = sizeRef.current;
      if (!width || !height) {
        return;
      }

      const nextX = event.clientX / width;
      const nextY = event.clientY / height;
      const previousX = pointerRef.current.targetX;
      const previousY = pointerRef.current.targetY;

      pointerRef.current.targetX = nextX;
      pointerRef.current.targetY = nextY;
      pointerRef.current.active = true;
      velocityRef.current = Math.hypot(nextX - previousX, nextY - previousY);
      idleRef.current = 0;
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    const animate = () => {
      const glowElement = glowRef.current;
      const ambientElement = ambientRef.current;
      const particleElements = particlesRef.current;
      const { width, height } = sizeRef.current;
      const pointer = pointerRef.current;

      pointer.x = lerp(pointer.x, pointer.targetX, LERP);
      pointer.y = lerp(pointer.y, pointer.targetY, LERP);
      velocityRef.current = lerp(velocityRef.current, 0, 0.05);

      if (!pointer.active) {
        idleRef.current += 1;
      }

      const idleMultiplier = pointer.active ? 1 : Math.pow(IDLE_FADE, idleRef.current);
      const motionBoost = clamp(velocityRef.current * 28, 0, 0.22);
      const glowScale = 0.95 + motionBoost + (pointer.active ? 0.08 : 0);
      const glowOpacity = clamp(0.48 + motionBoost + (idleMultiplier - 1) * 0.2, 0.16, 0.78);
      const glowX = pointer.x * width - GLOW_SIZE / 2;
      const glowY = pointer.y * height - GLOW_SIZE / 2;

      if (glowElement) {
        glowElement.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) scale(${glowScale})`;
        glowElement.style.opacity = String(glowOpacity);
      }

      if (ambientElement) {
        const ambientX = 50 + (pointer.x - 0.5) * 8;
        const ambientY = 50 + (pointer.y - 0.5) * 8;
        ambientElement.style.backgroundPosition = `${ambientX}% ${ambientY}%`;
      }

      particleElements.forEach((particle, index) => {
        if (!particle) {
          return;
        }

        const drift = particle.offset + index * 0.37;
        const waveX = Math.sin((performance.now() * 0.00035) + drift) * particle.amplitude;
        const waveY = Math.cos((performance.now() * 0.00028) + drift) * particle.amplitudeY;
        const parallaxX = (pointer.x - 0.5) * particle.parallaxX * width;
        const parallaxY = (pointer.y - 0.5) * particle.parallaxY * height;
        const x = particle.baseX * width + waveX + parallaxX;
        const y = particle.baseY * height + waveY + parallaxY;
        const scale = 0.7 + Math.sin((performance.now() * 0.0005) + drift) * 0.16;
        const alpha = particle.alphaBase + motionBoost * 0.45;

        particle.el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        particle.el.style.opacity = String(clamp(alpha, 0.08, 0.42));
      });

      rafRef.current = window.requestAnimationFrame(animate);
    };

    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
      baseX: (index * 0.143 + 0.17) % 1,
      baseY: (index * 0.097 + 0.21) % 1,
      amplitude: 10 + (index % 4) * 8,
      amplitudeY: 8 + (index % 3) * 6,
      parallaxX: 0.03 + (index % 5) * 0.012,
      parallaxY: 0.022 + (index % 4) * 0.01,
      alphaBase: 0.1 + (index % 6) * 0.03,
      offset: index * 0.73,
      el: particlesRef.current[index]?.el ?? null,
    }));

    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]"
    >
      {/* Base atmospheric layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_42%),radial-gradient(circle_at_20%_30%,rgba(0,212,255,0.09),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.06),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_24%,rgba(255,255,255,0.01)_72%,transparent)] opacity-95" />
      <div
        ref={ambientRef}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.08),transparent_32%),radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.06),transparent_25%),radial-gradient(circle_at_75%_75%,rgba(34,211,238,0.05),transparent_28%)] bg-size-[120%_120%] mix-blend-screen opacity-80 blur-3xl transition-[background-position] duration-200"
      />

      {/* Cursor-driven premium glow */}
      <div className="absolute inset-0">
        <div
          ref={glowRef}
          className="absolute left-0 top-0 rounded-full opacity-0"
          style={{
            width: `${GLOW_SIZE}px`,
            height: `${GLOW_SIZE}px`,
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.26) 0%, rgba(0,212,255,0.42) 18%, rgba(139,92,246,0.26) 42%, rgba(34,211,238,0.18) 58%, rgba(5,5,5,0) 75%)",
            filter: "blur(86px) saturate(165%)",
            willChange: "transform, opacity",
            transform: "translate3d(-9999px, -9999px, 0) scale(1)",
          }}
        />
      </div>

      {/* Floating particles */}
      {!reducedMotion &&
        Array.from({ length: PARTICLE_COUNT }).map((_, index) => (
          <span
            key={index}
            ref={(node) => {
              if (!particlesRef.current[index]) {
                particlesRef.current[index] = {};
              }
              particlesRef.current[index].el = node;
            }}
            className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_18px_rgba(0,212,255,0.45)]"
            style={{
              opacity: 0.18,
              willChange: "transform, opacity",
              transform: "translate3d(-9999px, -9999px, 0)",
            }}
          />
        ))}

      {/* Glassmorphism veil for a premium SaaS feel */}
      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01)_35%,rgba(255,255,255,0.02)_55%,rgba(255,255,255,0.01))] backdrop-blur-[1px]" />

      {reducedMotion && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,212,255,0.08),transparent_30%),radial-gradient(circle_at_75%_20%,rgba(139,92,246,0.08),transparent_26%),radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.06),transparent_22%)]" />
      )}
    </div>
  );
}
