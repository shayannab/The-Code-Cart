import { useState } from "react";
import { Copy } from "lucide-react";

export default function JSONFormatter() {
  const [input, setInput] = useState("");
  const [formatted, setFormatted] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setFormatted(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (err) {
      setError("Invalid JSON");
      setFormatted("");
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm font-mono resize-none"
        placeholder="Paste JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={formatJSON}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition"
      >
        Format JSON
      </button>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {formatted && (
        <div className="relative">
          <pre className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg text-sm font-mono whitespace-pre-wrap overflow-auto">
            {formatted}
          </pre>
          <button
            onClick={copy}
            className="absolute top-2 right-2 p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700"
          >
            <Copy size={16} />
          </button>
          {copied && (
            <span className="absolute bottom-2 right-4 text-emerald-500 text-xs font-medium">
              Copied!
            </span>
          )}
        </div>
      )}
    </div>
  );
}
