import * as React from "react";
import { useState } from "react";
import { Player } from "../../app/page";
import Image from "next/image";
import { AddPlayerModal } from "./AddPlayerModal/AddPlayerModal";
import { TeamConfig } from "./TeamConfig/TeamConfig";

interface PropTypes {
  position: number;
}

export const initialTeamState = [null, null, null, null, null];

export const TeamSelector = ({ position }: PropTypes) => {
  const [playersSelected, setPlayersSelected] =
    useState<(Player | null)[]>(initialTeamState);

  return (
    <div className="flex flex-col xl:flex-row items-center gap-8">
      <div
        className={`relative order-2 ${
          position === 1 ? "xl:order-2" : "xl:order-1"
        }`}
      >
        <div className="w-60 lg:w-80">
          <Image
            className="relative shadow-lg shadow-gray-700 rounded-2xl"
            src="/pitch.jpg"
            alt="Next.js Logo"
            width={380}
            height={674}
            priority
          />
        </div>
        {playersSelected.map((playerSelected, idx) => (
          <AddPlayerModal
            playerSelected={playerSelected}
            idx={idx}
            key={idx}
            setPlayersSelected={setPlayersSelected}
            position={position}
          />
        ))}
      </div>
      <TeamConfig position={position} setPlayersSelected={setPlayersSelected} />
    </div>
  );
};
