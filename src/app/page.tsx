"use client";

import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "~/utils/keys";
// import { Telegram } from "./components/icons";

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

  const handleButtonClick = () => {
    // if (!isConnected) {
    //   window.location.href = `${process.env.NEXT_PUBLIC_TELEGRAM_OAUTH_URL}?userId=${user?.userId}`;
    // } else {
    //   // Optionally, you can add any logic that should happen when connected
    // }
    
    // Load the Telegram widget script dynamically
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.setAttribute('data-telegram-login', "trenchtestbot");
    script.setAttribute('data-size', "large");
    script.setAttribute('data-auth-url', "localhost:8080");
    script.setAttribute('data-request-access', "write");
    document.body.appendChild(script);
  };

  return (
   <button
      className="flex gap-1 items-center bg-white w-fit px-5 py-1.5 rounded-xl font-semibold text-lg"
      onClick={handleButtonClick}
    >
      <p>
        {isConnected ? "Telegram" : "Connect to"} {user?.username}
      </p>
    </button>
  );
}
