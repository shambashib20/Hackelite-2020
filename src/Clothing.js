import React , { useState } from 'react';
import { useStateValue } from './StateProvider'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Cloth1 from "./ClothingItems/Cloth1"
import Cloth2 from "./ClothingItems/Cloth2"
import Cloth3 from "./ClothingItems/Cloth3"
import Cloth4 from "./ClothingItems/Cloth4"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(149),
  },
}));

export default function Clothing() {
  const [{basket}, dispatch] = useStateValue();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ marginTop: '-2rem' }} >
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
          <Link to="/" style={{ textDecoration: 'none' , color: 'white'}}> Precess </Link>
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
          <Link to="/shoppingcart" style={{ textDecoration: 'none' , color: 'white'}}> <ShoppingCartIcon /> </Link>
          <span>{basket?.length}</span>
          </IconButton>
        </Toolbar>
      </AppBar>
      <br />  <br />  <br /> 
      <div className="clothes-1">
      <Cloth1 />     <Cloth2 />
      </div>
      <br /> <br />
      <div className="clothes-2">
      <Cloth3  />
      <Cloth4  />
      </div>
    </div>

  );
}
