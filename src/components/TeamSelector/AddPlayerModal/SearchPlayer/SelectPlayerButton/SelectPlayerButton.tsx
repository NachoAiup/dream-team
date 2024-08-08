import { Player } from "@/app/page";
import { ImageWithFallback } from "@/components/ImageWithFallback";

interface PropTypes {
  handleSelectPlayer: (addedPlayer: Player) => void;
  player: Player;
}

export const SelectPlayerButton = ({
  handleSelectPlayer,
  player,
}: PropTypes) => {
  return (
    <button
      className="border w-full cursor-pointer border-solid border-blueGray-500 hover:bg-gray-200 font-bold uppercase rounded p-2 flex justify-between items-center"
      onClick={() => handleSelectPlayer(player)}
    >
      <p>{player.player_name}</p>
      <ImageWithFallback
        width={30}
        height={30}
        alt={player.player_name}
        src={player.player_image}
      />
    </button>
  );
};
