import { useState } from "react";
import toast from "react-hot-toast";

function OutputCard({ title, emoji, content }) {
  const [copied, setCopied] = useState(false);

  async function copyText() {
    try {
      await navigator.clipboard.writeText(content);

      setCopied(true);

      toast.success(`${title} copied!`);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      toast.error("Copy failed!");
    }
  }

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:border-blue-500
        hover:-translate-y-1
      "
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-2xl font-bold">
          {emoji} {title}
        </h3>

        <button
          onClick={copyText}
          className="
            rounded-xl
            bg-blue-600
            px-5
            py-2
            font-medium
            transition
            hover:bg-blue-700
            active:scale-95
          "
        >
          {copied ? "✅ Copied" : "📋 Copy"}
        </button>
      </div>

      <p className="whitespace-pre-wrap leading-8 text-gray-300">
        {content}
      </p>
    </div>
  );
}

export default OutputCard;