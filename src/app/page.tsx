"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "~/utils/keys";
import { Telegram } from "~/components/icons";

export default function Home() {
  const handleButtonClick = () => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute("data-telegram-login", "mdf_v1_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-auth-url", "https://manta.trench.ag/api/v1/auth/telegram");
    script.setAttribute("data-request-access", "write");
    document.body.appendChild(script);
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <button
        className="flex gap-1 items-center bg-white w-fit px-5 py-1.5 rounded-xl font-semibold text-lg"
        onClick={handleButtonClick}
      >
        <Telegram /> Connect
      </button>
    </main>
  );
}
