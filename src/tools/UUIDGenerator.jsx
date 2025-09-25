import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Copy } from "lucide-react";

export default function UUIDGenerator() {
  const [uuid, setUuid] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => setUuid(uuidv4());
  const copy = () => {
    navigator.clipboard.writeText(uuid);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="p-4 space-y-4">
      <button
        onClick={generate}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition"
      >
        Generate UUID
      </button>

      {uuid && (
        <div className="flex items-center justify-between bg-neutral-100 dark:bg-neutral-800 p-3 rounded-xl">
          <code className="truncate text-sm">{uuid}</code>
          <button onClick={copy}>
            <Copy size={16} />
          </button>
        </div>
      )}

      {copied && (
        <span className="text-emerald-500 text-sm font-medium">Copied!</span>
      )}
    </div>
  );
}
