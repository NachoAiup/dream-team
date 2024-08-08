import { Button, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { initialTeamState } from "../../TeamSelector";
import { Player } from "@/app/page";

interface PropTypes {
  setEditTeamName: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayersSelected: React.Dispatch<React.SetStateAction<(Player | null)[]>>;
}

export const ActionsButtonGroup = ({
  setEditTeamName,
  setPlayersSelected,
}: PropTypes) => {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="Vertical button group"
      className="border-slate-300 w-full"
    >
      <Button
        key="one"
        className="  hover:bg-slate-300 hover:text-[#18181b] hover:border-transparent"
        sx={{ color: "#cbd5e1", borderColor: "#cbd5e1" }}
        onClick={() => setEditTeamName((prevState) => !prevState)}
        startIcon={<EditIcon />}
      >
        cambiar nombre
      </Button>
      <Button
        key="two"
        sx={{ color: "#cbd5e1", borderColor: "#cbd5e1" }}
        className="hover:bg-slate-300 hover:text-[#18181b] hover:border-transparent"
        onClick={() => setPlayersSelected(initialTeamState)}
        startIcon={<DeleteIcon />}
      >
        borrar equipo
      </Button>
    </ButtonGroup>
  );
};
