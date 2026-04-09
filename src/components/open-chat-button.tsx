"use client";

import { MessageCircle } from "lucide-react";

export function OpenChatButton() {
  return (
    <button
      onClick={() => {
        const chatButton = document.querySelector(
          "[data-chat-trigger]"
        ) as HTMLButtonElement | null;
        if (chatButton) chatButton.click();
      }}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-black/80 transition-colors"
    >
      <MessageCircle className="w-4 h-4" />
      Open Chat Demo
    </button>
  );
}
