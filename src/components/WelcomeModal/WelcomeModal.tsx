import { forwardRef, useState, Fragment, ReactElement, Ref } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Divider } from "@mui/material";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WelcomeModal() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="text-center">
          ¡Bienvenido a Dream Team!
        </DialogTitle>
        <Divider />
        <DialogContent>
          <p>En esta app vas a poder crear el partido de tus sueños</p>
          Armá 2 equipos con tus jugadores favoritos... sin ninguna limitación!
        </DialogContent>
        <Divider />
        <DialogActions className="justify-center">
          <Button onClick={handleClose}>Empezar a jugar</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
