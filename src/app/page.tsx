"use client";

import WelcomeModal from "../components/WelcomeModal/WelcomeModal";
import { TeamSelector } from "../components/TeamSelector/TeamSelector";
import Divider from "@mui/material/Divider";
import { useEffect } from "react";

export interface Player {
  player_name: string;
  player_image: string;
  player_id: string;
}

export default function Home() {
  useEffect(() => {
    sessionStorage.removeItem("selectedPlayersId");
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 2xl:p-20 bg-gradient-to-br from-zinc-600 to-zinc-900">
      <WelcomeModal />
      <div className="z-10 w-full max-w-5xl items-center justify-center text-sm lg:flex">
        <p className="absolute font-bold p-2 bg-gray-800 text-white text-2xl left-0 top-0 flex w-full justify-center items-center border-b border-green-800 shadow-lg bg-center">
          DREAM TEAM
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-4 gap-4 justify-around w-full">
        <TeamSelector position={1} />
        <Divider orientation="vertical" flexItem className="border-gray-500" />
        <TeamSelector position={2} />
      </div>
    </main>
  );
}
