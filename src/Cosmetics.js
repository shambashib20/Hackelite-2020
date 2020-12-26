import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Cosmetics1 from "./CosmeticsItems/Cosmetics1"
import Cosmetics2 from "./CosmeticsItems/Cosmetics2"
import Cosmetics3 from "./CosmeticsItems/Cosmetics3"
import Cosmetics4 from "./CosmeticsItems/Cosmetics4"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(149),
  },
}));

export default function Cosmetics() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ marginTop: '-2rem' }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
          <Link to="/" style={{ textDecoration: 'none' , color: 'white'}}> Precess </Link>
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
          <Link to="/shoppingcart" style={{ textDecoration: 'none' , color: 'white'}}> <ShoppingCartIcon />    </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
      <br />  <br />  <br /> 
      <div className="clothes-1">
      <Cosmetics1 /> {' '} {' '}
      <Cosmetics2 />
      </div>
      <br /> <br />
      <div className="clothes-2">
      <Cosmetics3  />
      <Cosmetics4  />
      </div>
    </div>
  );
}
