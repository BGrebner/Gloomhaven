import React from "react";
import { Dialog, List, Button } from "@material-ui/core";

const LoginDialog: React.FC<{open: boolean; onClose: () => void}>  = ({open, onClose}) => {
    const handleClose = () => onClose();

    return (
        <Dialog onClose={handleClose} open={open}>
            <List>
                <Button>Sign in with Google</Button>
                <Button>Sign in with Facebook</Button>
            </List>
        </Dialog>
    );
}

export default LoginDialog;