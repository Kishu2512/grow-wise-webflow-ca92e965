import { useEffect, useRef } from "react";

interface Spore {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  phase: number;
  speed: number;
}

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const sporesRef = useRef<Spore[]>([]);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.min(60, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 15000));
    const spores: Spore[] = [];
    for (let i = 0; i < count; i++) {
      spores.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 3 + 1.5,
        opacity: Math.random() * 0.4 + 0.1,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.5 + 0.5,
      });
    }
    sporesRef.current = spores;

    const connectionDistance = 160;
    const mouseRadius = 180;

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      timeRef.current += 0.008;
      const t = timeRef.current;
      const mouse = mouseRef.current;

      spores.forEach((s) => {
        // Organic drift — sine-wave wandering
        s.vx += Math.sin(t * s.speed + s.phase) * 0.003;
        s.vy += Math.cos(t * s.speed * 0.7 + s.phase) * 0.003;

        // Mouse repulsion (organic — they scatter like organisms)
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius && dist > 0) {
          const force = ((mouseRadius - dist) / mouseRadius) * 0.015;
          s.vx -= (dx / dist) * force;
          s.vy -= (dy / dist) * force;
        }

        s.vx *= 0.985;
        s.vy *= 0.985;
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0 || s.x > w) s.vx *= -1;
        if (s.y < 0 || s.y > h) s.vy *= -1;
        s.x = Math.max(0, Math.min(w, s.x));
        s.y = Math.max(0, Math.min(h, s.y));

        // Breathing opacity
        const breathe = Math.sin(t * 2 + s.phase) * 0.15 + 0.85;
        const finalOpacity = s.opacity * breathe;

        // Organic glow — soft, warm
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 5);
        grad.addColorStop(0, `hsla(160, 100%, 45%, ${finalOpacity * 0.3})`);
        grad.addColorStop(0.5, `hsla(160, 80%, 40%, ${finalOpacity * 0.08})`);
        grad.addColorStop(1, `hsla(160, 80%, 40%, 0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(s.x - s.radius * 5, s.y - s.radius * 5, s.radius * 10, s.radius * 10);

        // Core spore
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(160, 100%, 50%, ${finalOpacity})`;
        ctx.fill();
      });

      // Mycelium connections — organic curves
      for (let i = 0; i < spores.length; i++) {
        for (let j = i + 1; j < spores.length; j++) {
          const dx = spores[i].x - spores[j].x;
          const dy = spores[i].y - spores[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.12;
            const mx = (spores[i].x + spores[j].x) / 2 + Math.sin(t + i) * 8;
            const my = (spores[i].y + spores[j].y) / 2 + Math.cos(t + j) * 8;
            ctx.beginPath();
            ctx.moveTo(spores[i].x, spores[i].y);
            ctx.quadraticCurveTo(mx, my, spores[j].x, spores[j].y);
            ctx.strokeStyle = `hsla(160, 80%, 45%, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Mouse aura — warm bio glow
      if (mouse.x > 0 && mouse.y > 0) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 100);
        grad.addColorStop(0, "hsla(45, 100%, 60%, 0.05)");
        grad.addColorStop(0.5, "hsla(160, 100%, 40%, 0.03)");
        grad.addColorStop(1, "hsla(160, 100%, 40%, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(mouse.x - 100, mouse.y - 100, 200, 200);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleLeave = () => { mouseRef.current = { x: -1000, y: -1000 }; };

    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticleNetwork;
