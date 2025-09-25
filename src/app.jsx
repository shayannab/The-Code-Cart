import { useState } from "react";
import Navbar from "./components/Navbar";
import ParallaxHero from "./components/ParallaxHero";
import HowToUse from "./components/HowToUse";
import ToolCard from "./components/ToolCard";
import UUIDGenerator from "./tools/UUIDGenerator";
import JSONFormatter from "./tools/JSONFormatter";
import TextCaseConverter from "./tools/TextCaseConverter";
import RegexTester from "./tools/RegexTester";
import JWTDecoder from "./tools/JWTDecoder";

const tools = [
  { id: "uuid", title: "UUID Generator", description: "Generate unique identifiers" },
  { id: "json", title: "JSON Formatter", description: "Pretty-print and validate JSON" },
  { id: "text", title: "Text Case Converter", description: "Switch between upper/lower/title case" },
  { id: "regex", title: "Regex Tester", description: "Test and debug regex patterns" },
  { id: "jwt", title: "JWT Decoder", description: "Decode JWT tokens safely" },
];

export default function App() {
  const [activeTool, setActiveTool] = useState(null);

  return (
    <div className="min-h-screen bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-neutral-900 dark:text-neutral-100 transition flex flex-col">
      <Navbar />
      <main className="flex-1 fade-in">
        <section id="hero">
          <ParallaxHero />
        </section>
        <section id="tools" className="w-full max-w-6xl mx-auto py-16 px-4">
          <h2 className="gradient-text text-3xl sm:text-4xl font-extrabold mb-8 text-center select-none">All-in-One Dev Tools</h2>
          {!activeTool ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <ToolCard key={tool.id} {...tool} onClick={() => setActiveTool(tool.id)} />
              ))}
            </div>
          ) : (
            <section className="w-full max-w-2xl mx-auto fade-in">
              <button
                onClick={() => setActiveTool(null)}
                className="mb-4 text-sm text-blue-500 hover:underline"
              >
                ← Back
              </button>

              {activeTool === "uuid" && <UUIDGenerator />}
              {activeTool === "json" && <JSONFormatter />}
              {activeTool === "text" && <TextCaseConverter />}
              {activeTool === "regex" && <RegexTester />}
              {activeTool === "jwt" && <JWTDecoder />}
            </section>
          )}
        </section>
        <section id="how">
          <HowToUse />
        </section>
      </main>
    </div>
  );
}
