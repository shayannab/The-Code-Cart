import { useEffect, useRef } from "react";

export default function Hero() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.backgroundPosition = `center ${scrollY * 0.4}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={parallaxRef}
      className="w-full max-w-4xl mx-auto py-20 px-4 text-center fade-in"
      style={{
        background: "linear-gradient(90deg,#60a5fa 0%,#2563eb 100%)",
        borderRadius: "2rem",
        boxShadow: "0 8px 32px 0 rgba(99,102,241,0.10)",
        color: "#fff",
        backgroundAttachment: "fixed",
        backgroundPosition: "center 0px",
        backgroundRepeat: "no-repeat"
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold gradient-text mb-6 tracking-tight select-none" style={{color: "#fff"}}>
        All-in-One Dev Tools Suite
      </h1>
      <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto" style={{color: "#e0e7ef"}}>
        Instantly access essential developer utilities—UUID generator, JSON formatter, regex tester, and more—in a clean, fast, and distraction-free interface. Built for speed, clarity, and productivity.
      </p>
      <a href="#tools" className="inline-block px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold shadow-lg hover:bg-blue-100 transition text-lg">
        Get Started
      </a>
    </section>
  );
}