import React , { useState } from 'react';
import { useStateValue } from './StateProvider'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Appliances1 from "./AppliancesItems/Appliances1"
import Appliances2 from "./AppliancesItems/Appliances2"
import Appliances3 from "./AppliancesItems/Appliances3"
import Appliances4 from "./AppliancesItems/Appliances4"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(149),
  },
}));

export default function Appliances() {
  const [{basket}, dispatch] = useStateValue();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ marginTop: '-2rem' }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
          <Link to="/" style={{ textDecoration: 'none' , color: 'white'}}> Precess </Link>
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
          <Link to="/shoppingcart" style={{ textDecoration: 'none' , color: 'white'}}><ShoppingCartIcon /></Link>
          <span>{basket?.length}</span>
          </IconButton>
        </Toolbar>
      </AppBar>
      <br />  <br />  <br /> 
      <div className="clothes-1">
      <Appliances1 /> {' '} {' '}
      <Appliances2 />
      </div>
      <br /> <br />
      <div className="clothes-2">
      <Appliances3  />
      <Appliances4  />
      </div>
    </div>
  );
}
