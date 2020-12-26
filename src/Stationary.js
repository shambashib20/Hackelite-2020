import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Carousel from 'react-bootstrap/Carousel'
import Stationary1 from "./StationaryItems/Stationary1"
import Stationary2 from "./StationaryItems/Stationary2"
import Stationary3 from "./StationaryItems/Stationary3"
import Stationary4 from "./StationaryItems/Stationary4"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(149),
  },
}));

export default function Stationary() {
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
          </IconButton>
        </Toolbar>
      </AppBar>
      <br />  <br />  <br /> 
      <div className="clothes-1">
      <Stationary1 /> {' '} {' '}
      <Stationary2 />
      </div>
      <br /> <br />
      <div className="clothes-2">
      <Stationary3  />
      <Stationary4  />
      </div>
{/*     
    <br /> <br /> <br />
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
    </div>
  );
}
