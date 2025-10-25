
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const parallaxRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (parallaxRef.current) {
      observer.observe(parallaxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        const parallaxSpeed = scrollY * 0.3;
        
        // Apply multiple transform effects
        parallaxRef.current.style.transform = `
          translateY(${parallaxSpeed}px) 
          scale(${1 + scrollY * 0.0002})
        `;
        
        // Dynamic background position with scroll
        parallaxRef.current.style.backgroundPosition = `
          ${50 + mousePosition.x * 0.02}% ${50 + scrollY * 0.1}%
        `;
        
        // Dynamic opacity based on scroll
        const opacity = Math.max(0.1, 1 - scrollY * 0.002);
        parallaxRef.current.style.opacity = opacity;
      }
    };

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100 - 50;
      const y = (e.clientY / window.innerHeight) * 100 - 50;
      
      mouseRef.current = { x, y };
      setMousePosition({ x, y });

      // Apply mouse-based transform
      if (parallaxRef.current) {
        const tiltX = (y * 0.1);
        const tiltY = (x * 0.1);
        
        parallaxRef.current.style.setProperty('--mouse-x', `${x}px`);
        parallaxRef.current.style.setProperty('--mouse-y', `${y}px`);
        parallaxRef.current.style.setProperty('--tilt-x', `${tiltX}deg`);
        parallaxRef.current.style.setProperty('--tilt-y', `${tiltY}deg`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);

  const handleGetStarted = (e) => {
    // Ripple effect
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.6);
      transform: scale(0);
      animation: ripple 0.6s linear;
      left: ${x}px;
      top: ${y}px;
      width: 20px;
      height: 20px;
      margin-left: -10px;
      margin-top: -10px;
    `;

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <>
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(96, 165, 250, 0.3); }
          50% { box-shadow: 0 0 60px rgba(96, 165, 250, 0.6); }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes text-glow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(255,255,255,0.5),
                         0 0 40px rgba(96, 165, 250, 0.3);
          }
          50% { 
            text-shadow: 0 0 30px rgba(255,255,255,0.8),
                         0 0 60px rgba(96, 165, 250, 0.5);
          }
        }

        .hero-container {
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .hero-section {
          background: linear-gradient(120deg, #18181b 0%, #27272a 40%, #1e293b 100%);
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite, glow 4s ease-in-out infinite;
          position: relative;
          overflow: hidden;
          transform: 
            perspective(1000px) 
            rotateX(var(--tilt-x, 0deg)) 
            rotateY(var(--tilt-y, 0deg))
            translateZ(0);
          transition: transform 0.3s ease-out;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(255,255,255,0.1) 0%, transparent 50%),
            linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%);
          pointer-events: none;
          animation: float 6s ease-in-out infinite;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: 
            radial-gradient(circle, transparent 20%, rgba(255,255,255,0.03) 21%, rgba(255,255,255,0.03) 29%, transparent 30%, transparent),
            linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.03) 75%, rgba(255,255,255,0.03) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
          animation: float 20s linear infinite;
          opacity: 0.5;
        }

        .hero-title {
          animation: text-glow 3s ease-in-out infinite;
          transform: translateZ(50px);
          color: #fff;
          /* Remove swing/float animation */
        }

        .hero-subtitle {
          /* Remove swing/float animation */
          transform: translateZ(30px);
          color: #e0e7ef;
        }

        .hero-button {
          position: relative;
          overflow: hidden;
          transform: translateZ(40px);
          transition: all 0.3s ease;
          background: linear-gradient(45deg, #18181b, #27272a);
          color: #fff;
        }

        .hero-button:hover {
          transform: translateZ(50px) translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        /* Light mode styles */
        @media (prefers-color-scheme: light) {
          .hero-title {
            color: #18181b;
          }
          .hero-subtitle {
            color: #27272a;
          }
          .hero-button {
            background: linear-gradient(45deg, #ffffff, #f0f9ff);
            color: #18181b;
          }
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-element {
          position: absolute;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .floating-element:nth-child(1) {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-delay: -2s;
        }

        .floating-element:nth-child(2) {
          width: 120px;
          height: 120px;
          top: 60%;
          right: 15%;
          animation-delay: -4s;
        }

        .floating-element:nth-child(3) {
          width: 60px;
          height: 60px;
          top: 30%;
          right: 25%;
          animation-delay: -1s;
        }

        .floating-element:nth-child(4) {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 20%;
          animation-delay: -3s;
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div className="hero-container" style={{width: "100vw", marginLeft: "calc(-50vw + 50%)"}}>
        <section
          ref={parallaxRef}
          className={`hero-section w-full pt-28 pb-20 px-4 text-center fade-in-up ${isVisible ? 'visible' : ''}`}
          style={{
            borderRadius: "2rem",
            color: "#fff",
            backgroundAttachment: "fixed",
            backgroundPosition: "center 0px",
            backgroundRepeat: "no-repeat",
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            maxWidth: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            /* ensure anchored scrolling accounts for fixed navbar */
            scrollMarginTop: "7rem",
            paddingTop: "7rem"
          }}
        >
          {/* Floating background elements */}
          <div className="floating-elements">
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
          </div>

          <h1 className="hero-title text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight select-none relative z-10">
              Dev Tools, But Make It Vibe
          </h1>
          
            <p className="hero-subtitle text-lg sm:text-xl mb-8 max-w-2xl mx-auto relative z-10" 
               style={{color: "#e0e7ef"}}>
              All your dev essentials, zero cringe. Generate UUIDs, format JSON, decode JWTs, test regex, and flip text cases—fast AF, no ads, no drama. <br />
              Built for creators, coders, and anyone who wants to get stuff done without the fluff. <br />
              Stay productive.
            </p>
          
          <a 
            href="#tools" 
            className="hero-button inline-block px-8 py-4 rounded-xl text-blue-700 font-semibold shadow-lg hover:shadow-2xl transition-all text-lg relative z-10"
            onClick={handleGetStarted}
          >
              Try the Tools →
          </a>
        </section>
      </div>
    </>
  );
}