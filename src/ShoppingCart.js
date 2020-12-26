import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ShoppingCart() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ marginTop: '-2rem' }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
          <Link to="/" style={{ textDecoration: 'none' , color: 'white'}}> Precess </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
