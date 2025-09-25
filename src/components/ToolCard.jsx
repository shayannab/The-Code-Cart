import { FileText, KeyRound, Code2, Hash, ShieldCheck } from "lucide-react";

const icons = {
  "UUID Generator": <Hash className="w-7 h-7 text-blue-700" />,
  "JSON Formatter": <FileText className="w-7 h-7 text-green-700" />,
  "Text Case Converter": <Code2 className="w-7 h-7 text-gray-500" />,
  "Regex Tester": <KeyRound className="w-7 h-7 text-purple-700" />,
  "JWT Decoder": <ShieldCheck className="w-7 h-7 text-yellow-700" />,
};

export default function ToolCard({ title, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="toolcard-modern p-8 rounded-[2.5rem] flex flex-col items-start text-left shadow-xl relative overflow-visible group"
      tabIndex={0}
    >
      <div className="toolcard-iconwrap flex items-center gap-3 mb-2 relative z-10">
  {icons[title] || <FileText className="w-8 h-8 text-gray-500" />}
        <h2 className="toolcard-title text-2xl font-extrabold select-none drop-shadow-sm text-white">{title}</h2>
      </div>
      <p className="toolcard-desc text-base text-gray-300 mb-1">{description}</p>
  <span className="toolcard-cta inline-block mt-2 text-xs text-blue-700 opacity-0 group-hover:opacity-100 transition font-semibold">Try now →</span>
      <style jsx>{`
      .toolcard-modern {
        background: radial-gradient(ellipse 120% 100% at 70% 80%, rgba(30,41,59,0.22) 0%, rgba(17,24,39,0.98) 60%, rgba(17,24,39,0.98) 100%);
        border-radius: 2.5rem;
        box-shadow: 0 8px 32px rgba(30,41,59,0.22), 0 1.5px 8px rgba(0,0,0,0.22);
        backdrop-filter: blur(16px);
        border: none;
        position: relative;
        overflow: hidden;
        transition: box-shadow 0.3s, transform 0.3s;
      }
      .toolcard-modern::before {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: radial-gradient(circle at 80% 70%, rgba(30,41,59,0.32) 0%, transparent 60%);
        z-index: 1;
      }
      .toolcard-modern::after {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        background-image:
          repeating-radial-gradient(circle at 50% 60%, rgba(30,41,59,0.16) 0px, transparent 2px, transparent 32px),
          linear-gradient(120deg, transparent 80%, rgba(30,41,59,0.10) 100%);
        z-index: 0;
      }
      .toolcard-modern:hover {
        box-shadow: 0 16px 48px rgba(30,41,59,0.32), 0 1.5px 8px rgba(0,0,0,0.28);
        transform: scale(1.04) translateY(-4px);
      }
      .toolcard-title {
        font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
        font-weight: 800;
        letter-spacing: 0.01em;
        color: #fff;
      }
      .toolcard-desc {
        font-size: 1rem;
        color: #d1d5db;
      }
      .toolcard-cta {
        text-shadow: 0 1px 8px rgba(30,41,59,0.18);
      }
      .toolcard-iconwrap svg {
        filter: drop-shadow(0 2px 8px rgba(30,41,59,0.22));
      }
      `}</style>
    </button>
  );
}
