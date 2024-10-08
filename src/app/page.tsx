"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "~/utils/keys";
import { Telegram } from "./components/icons";

export default function Home() {
  const { data: user } = useQuery({
    queryKey: [QUERY_KEY.USER],
    queryFn: async () => {
      // mocking the user data
      return {
        userId: "123",
        username: "username",
        name: "name",
        telegramId: null,
      };
    },
  });

  const isConnected = !!user?.telegramId;

  return (
    <div className="flex flex-col bg-black items-center justify-center h-screen">
      <button
        className="flex gap-1 items-center bg-white w-fit px-5 py-1.5 rounded-xl font-semibold text-lg"
        onClick={() => {
          if (!isConnected) {
            window.location.href = `${process.env.NEXT_PUBLIC_TELEGRAM_OAUTH_URL}?userId=${user?.userId}`;
          }
        }}
      >
        <Telegram className="text-black" /> {isConnected ? "Connected" : "Connect"}
      </button>
    </div>
  );
}
