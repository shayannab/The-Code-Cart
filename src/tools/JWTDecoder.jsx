import { useState } from "react";

export default function JWTDecoder() {
  const [token, setToken] = useState("");
  const [decoded, setDecoded] = useState("");
  const [error, setError] = useState("");

  const decode = () => {
    try {
      const parts = token.split(".");
      if (parts.length !== 3) throw new Error("Invalid token");
      const payload = JSON.parse(atob(parts[1]));
      setDecoded(JSON.stringify(payload, null, 2));
      setError("");
    } catch (err) {
      setError("Invalid JWT");
      setDecoded("");
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-32 p-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm font-mono"
        placeholder="Paste JWT token here..."
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button
        onClick={decode}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
      >
        Decode
      </button>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {decoded && (
        <pre className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg text-sm font-mono whitespace-pre-wrap overflow-auto">
          {decoded}
        </pre>
      )}
    </div>
  );
}
