import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let rx = x, ry = y;
    let raf;

    const move = (e) => {
      x = e.clientX; y = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    };
    const overInteractive = (e) => {
      const target = e.target.closest("a, button, [data-magnetic]");
      if (ring.current) {
        if (target) {
          ring.current.style.width = "56px";
          ring.current.style.height = "56px";
          ring.current.style.borderColor = "#D946EF";
        } else {
          ring.current.style.width = "36px";
          ring.current.style.height = "36px";
          ring.current.style.borderColor = "#39FF14";
        }
      }
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", overInteractive);
    loop();
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", overInteractive);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
