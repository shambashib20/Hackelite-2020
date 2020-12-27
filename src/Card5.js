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

export default function ImgMediaCard5() {
  const classes = useStyles();

  return (
    <Link to="/stationary" style={{ textDecoration: 'none', color: 'black' }}>
    <Card className={classes.root}>
      <CardActionArea>
       <CardMedia
       component="img"
          alt="Contemplative Reptile"
          height="140"
          image ="https://images.unsplash.com/photo-1454587399083-b11b22f48fb6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHN0YXRpb25lcnl8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          title="Stationary"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Stationary
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Have a canvas you want to give alway or your brush set you once adored? Provided it to some one who want to provide a new life to them.
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
        <ShoppingCart />
        <p>Buy</p>
        </Button>
      </CardActions> */}
    </Card>
    </Link>
  );
}