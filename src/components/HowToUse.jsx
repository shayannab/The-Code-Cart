export default function HowToUse() {
  const steps = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
      title: "Browse Tools",
      desc: "On the homepage, select the tool you need from the grid. Each card shows a short description and icon."
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>,
      title: "Use Instantly",
      desc: "The selected tool opens with a simple, focused interface. Enter your data and get results instantly."
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
      title: "Switch Tools",
      desc: "Click the back arrow to return to the tool grid and pick another utility."
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M15 9v6"/><path d="M9 9v6"/></svg>,
      title: "Theme Toggle",
      desc: "Use the theme switch in the navbar to choose light or dark mode for your comfort."
    }
  ];
  return (
    <>
      <style jsx>{`
        .howto-steps-row {
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
          justify-content: center;
          align-items: stretch;
          width: 100vw;
          max-width: 100vw;
          overflow-x: auto;
          padding: 1.2rem 0;
        }
        .howto-step-card {
          min-width: 220px;
          max-width: 260px;
          flex: 1 1 220px;
          background: linear-gradient(120deg, rgba(255,255,255,0.72) 0%, rgba(243,244,246,0.68) 100%);
          border-radius: 1.25rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.10), 0 1.5px 8px rgba(0,0,0,0.06);
          backdrop-filter: blur(18px);
          border: 2px solid rgba(180,190,220,0.18);
          animation: fadeInUp 1.2s cubic-bezier(.23,1.01,.32,1) both;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: 1.2rem 0.75rem 1rem 0.75rem;
          position: relative;
        }
        .howto-step-card .howto-step-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(120deg, #818cf8 0%, #60a5fa 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(96,165,250,0.14);
          margin-bottom: 1rem;
        }
        .howto-step-card .howto-step-icon svg {
          width: 22px;
          height: 22px;
          color: #fff;
        }
        .howto-step-title {
          font-size: 1.08rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-align: center;
          color: #18181b;
        }
        .howto-step-desc {
          font-size: 0.98rem;
          color: #374151;
          text-align: center;
        }
        @media (prefers-color-scheme: dark) {
          .howto-step-card {
            background: linear-gradient(120deg, rgba(36,37,46,0.72) 0%, rgba(24,24,27,0.68) 100%);
            border: 2px solid rgba(80,90,120,0.22);
            backdrop-filter: blur(18px);
          }
          .howto-step-title {
            color: #f3f4f6;
          }
          .howto-step-desc {
            color: #cbd5e1;
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
      <section className="w-full px-0 py-12">
        <h2 className="text-3xl font-bold mb-10 text-center select-none text-neutral-900 dark:text-neutral-100">How to Use</h2>
        <div className="howto-steps-row">
          {steps.map((step, idx) => (
            <div className="howto-step-card" key={idx}>
              <span className="howto-step-icon">{step.icon}</span>
              <div className="howto-step-title">{step.title}</div>
              <div className="howto-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <span className="howto-badge inline-block px-5 py-2 rounded-xl font-medium shadow">Fast. Private. No sign-up required.</span>
        </div>
      </section>
    </>
  );
}