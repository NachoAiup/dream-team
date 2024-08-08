import { Player } from "@/app/page";
import { filterDuplicates } from "@/utils/filterDuplicates";
import { SetStateAction, useState } from "react";
import { SelectPlayerButton } from "./SelectPlayerButton/SelectPlayerButton";
import { SearchMessage } from "./SearchMessage/SearchMessage";
import { initialTeamState } from "../../TeamSelector";

interface PropTypes {
  idx: number;
  setPlayersSelected: React.Dispatch<SetStateAction<(Player | null)[]>>;
  handleClose: () => void;
  position: number;
}

interface PlayersStorage {
  1: (string | null)[];
  2: (string | null)[];
  [key: number]: (string | null)[];
}

export const SearchPlayer = ({
  setPlayersSelected,
  handleClose,
  idx,
  position,
}: PropTypes) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [exceedResultLength, setExceedResultLength] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setNoResults(false);
    setExceedResultLength(false);
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/?action=get_players&player_name=${searchQuery}&APIkey=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          const filteredData = data.filter(
            (player: Player) => player.player_image !== ""
          );
          let filteredDuplicates = filterDuplicates(filteredData, "player_id");

          const storedPlayersValue: string | null =
            sessionStorage.getItem("selectedPlayersId");

          if (storedPlayersValue) {
            const playersStorage = JSON.parse(storedPlayersValue);
            filteredDuplicates = filteredDuplicates.filter(
              (player) =>
                !Object.values(playersStorage).flat().includes(player.player_id)
            );
          }

          if (filteredDuplicates.length > 10) {
            setExceedResultLength(true);
            setPlayers(filteredDuplicates.slice(0, 10));
          } else if (filteredDuplicates.length === 0) {
            setNoResults(true);
          } else {
            setPlayers(filteredDuplicates);
          }
        } else {
          setPlayers([]);
          setNoResults(true);
        }
      })
      .catch((e) => {
        setError(true);
      });
  };

  const handleSelectPlayer = (addedPlayer: Player) => {
    let playersStorage: PlayersStorage;
    const storedPlayersValue: string | null =
      sessionStorage.getItem("selectedPlayersId");

    if (storedPlayersValue) {
      playersStorage = JSON.parse(storedPlayersValue);
    } else {
      playersStorage = { 1: initialTeamState, 2: initialTeamState };
    }

    const newPlayersStorage = {
      ...playersStorage,
      [position]: playersStorage[position].map((playerId, i) =>
        i === idx ? addedPlayer.player_id : playerId
      ),
    };

    sessionStorage.setItem(
      "selectedPlayersId",
      JSON.stringify(newPlayersStorage)
    );

    setPlayersSelected((prevState) =>
      prevState.map((player, i) => (i === idx ? addedPlayer : player))
    );
    handleClose();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative p-4 flex-auto flex gap-4 items-center"
      >
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Messi, Ronaldo..."
          className="px-3 py-3 placeholder-blueGray-300 text-gray-900 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
        <button
          className="text-blueGray-500 bg-transparent border border-solid border-blueGray-500 hover:bg-gray-200 active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Buscar
        </button>
      </form>
      <ul className="h-44 w-96 px-6 max-h-44 overflow-y-auto">
        {players.map((player: Player) => (
          <SelectPlayerButton
            player={player}
            handleSelectPlayer={handleSelectPlayer}
            key={player.player_id}
          />
        ))}
        <SearchMessage
          exceedResultLength={exceedResultLength}
          noResults={noResults}
          error={error}
        />
      </ul>
    </>
  );
};
