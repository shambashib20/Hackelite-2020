import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: 20,
    marginTop: 20,
    border: 5,
  },
});

export default function ImgMediaCard3() {
  const classes = useStyles();

  return (
    <Link to="/appliances" style={{ textDecoration: 'none' , color: 'black'}}>
    <Card className={classes.root}>
      <CardActionArea>
       <CardMedia
       component="img"
          alt="Appliances"
          height="140"
          image ="https://images.pexels.com/photos/5825363/pexels-photo-5825363.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title="Appliances"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Appliances
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Want to get an update in current stack of appliances but running low on budget, go grab yourself one at lowered price.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}