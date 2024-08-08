import { Player } from "../../../app/page";
import {
  forwardRef,
  useState,
  Fragment,
  ReactElement,
  Ref,
  Dispatch,
  SetStateAction,
} from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { AddPlayerButton } from "../../AddPlayerButton";
import { Divider, IconButton } from "@mui/material";
import { SearchPlayer } from "./SearchPlayer/SearchPlayer";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface PropTypes {
  idx: number;
  setPlayersSelected: Dispatch<SetStateAction<(Player | null)[]>>;
  playerSelected: Player | null;
  position: number;
}

export const AddPlayerModal = ({
  idx,
  setPlayersSelected,
  playerSelected,
  position,
}: PropTypes) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <AddPlayerButton
        handleClickOpen={handleClickOpen}
        playerSelected={playerSelected}
        idx={idx}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <DialogTitle className="text-center">Agregá un jugador</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider />
        <DialogContent>
          <SearchPlayer
            setPlayersSelected={setPlayersSelected}
            handleClose={handleClose}
            idx={idx}
            position={position}
          />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
