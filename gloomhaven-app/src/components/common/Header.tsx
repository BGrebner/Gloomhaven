import { AppBar, Button, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Header = () => {
    const classes = useStyles();

    return (
    <AppBar position="static">
        <Typography variant="h6" className={classes.title}>Gloomhaven Campain Keeper</Typography>
        <Button color="inherit">Login</Button>
    </AppBar>
    );
}

export default Header;