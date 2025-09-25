import { useState } from "react";
import { Copy } from "lucide-react";

export default function TextCaseConverter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const convert = (type) => {
    if (type === "upper") setText(text.toUpperCase());
    if (type === "lower") setText(text.toLowerCase());
    if (type === "title")
      setText(
        text.replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      );
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm resize-none"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => convert("upper")}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
        >
          UPPERCASE
        </button>
        <button
          onClick={() => convert("lower")}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
        >
          lowercase
        </button>
        <button
          onClick={() => convert("title")}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium"
        >
          Title Case
        </button>
        <button
          onClick={copy}
          className="px-4 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-sm"
        >
          <Copy size={16} />
        </button>
      </div>

      {copied && <p className="text-emerald-500 text-sm">Copied!</p>}
    </div>
  );
}
