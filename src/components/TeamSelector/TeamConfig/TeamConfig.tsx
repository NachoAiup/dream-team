import { useState } from "react";
import { ActionsButtonGroup } from "./ActionsButtonGroup/ActionsButtonGroup";
import { Player } from "@/app/page";

interface PropTypes {
  position: number;
  setPlayersSelected: React.Dispatch<React.SetStateAction<(Player | null)[]>>;
}

export const TeamConfig = ({ position, setPlayersSelected }: PropTypes) => {
  const [teamName, setTeamName] = useState(`Nombre del equipo ${position}`);
  const [editTeamName, setEditTeamName] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEditTeamName(false);
  };

  return (
    <div className="order-1 2xl:w-64 flex flex-col items-center justify-center">
      {editTeamName ? (
        <form
          onSubmit={handleSubmit}
          className="flex items-center h-20 max-h-20 md:h-32 md:max-h-32 w-60 mb-2 xl:mb-12"
        >
          <input
            type="text"
            value={teamName}
            className="bg-transparent text-md 2xl:text-xl text-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => setTeamName(e.target.value)}
          />
        </form>
      ) : (
        <button
          onClick={() => setEditTeamName(true)}
          className="text-white w-60 p-2.5 mb-2 xl:mb-12 text-center text-md 2xl:text-xl font-bold h-20 max-h-20 md:h-32 md:max-h-32"
        >
          <p className="line-clamp-2 md:line-clamp-3">{teamName}</p>
        </button>
      )}
      <ActionsButtonGroup
        setEditTeamName={setEditTeamName}
        setPlayersSelected={setPlayersSelected}
      />
    </div>
  );
};
