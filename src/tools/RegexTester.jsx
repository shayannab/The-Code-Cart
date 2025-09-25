import { useState } from "react";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [matches, setMatches] = useState([]);

  const testRegex = () => {
    try {
      const regex = new RegExp(pattern, "g");
      const result = [...text.matchAll(regex)].map((m) => m[0]);
      setMatches(result);
    } catch (err) {
      setMatches(["Invalid regex"]);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Enter regex pattern..."
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
        className="w-full p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm font-mono"
      />
      <textarea
        placeholder="Enter text to test against..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-32 p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm"
      />
      <button
        onClick={testRegex}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
      >
        Test Regex
      </button>

      <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg text-sm">
        {matches.length > 0 ? (
          <ul className="list-disc list-inside">
            {matches.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        ) : (
          <p className="text-neutral-500">No matches found.</p>
        )}
      </div>
    </div>
  );
}
