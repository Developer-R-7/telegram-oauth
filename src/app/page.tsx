"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "~/utils/keys";
import { Telegram } from "~/components/icons";

export default function Home() {

  return (
    <main className="flex items-center justify-center h-screen">
      <a
        className="flex gap-1 items-center bg-white w-fit px-5 py-1.5 rounded-xl font-semibold text-lg"
        href="https://oauth.telegram.org/auth?bot_id=7139668898&origin=https%3A%2F%2Ftelegram-oauth-sigma.vercel.app&embed=1&request_access=write&return_to=https%3A%2F%2Ftelegram-oauth-sigma.vercel.app%2F"
      >
        <Telegram /> Connect
      </a>
    </main>
  );
}
