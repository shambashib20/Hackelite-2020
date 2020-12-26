import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: 20,
    marginTop: 20,
    border: 5,
  },
});

export default function ImgMediaCard1() {
  const classes = useStyles();

  return (
    <Link to="/clothing" style={{ textDecoration: 'none' , color: 'black'}}>
    <Card className={classes.root}>
      <CardActionArea>
       <CardMedia
       component="img"
          alt="Contemplative Reptile"
          height="140"
          image ="https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmd8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Clothings"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          
             Clothing
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}