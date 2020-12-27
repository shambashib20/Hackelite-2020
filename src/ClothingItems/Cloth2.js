import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStateValue } from '../StateProvider'
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth:300,
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Cloth1({ brand, size, used, price, additional }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
      dispatch ({
        type: "ADD_TO_BASKET",
        item: {
          brand:brand,
           size: size,
            used: used,
             price: price,
              additional : additional,
        }
      })
    };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            S
          </Avatar>
        }
        
        title="Short Skirt"
        subheader="ID - #4446433"
      />
      <CardMedia
        className={classes.media}
        image="https://i.imgur.com/tdoXnpH.jpg"
        title="short skirt"
      />
      
      <CardActions disableSpacing>
      <Button onClick={addToBasket}><ShoppingCartIcon /></Button> 
      <Button ><PhoneInTalkIcon /></Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
          <h3>
            Brand: none <br />
            Size: 28 inch waist  <br />
            Used: Once <br />
            Price: 400 <br />
            Additional Info: It is 16 inches in length  <br />
            </h3>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
