import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 370,
  },
  media: {
    height: 140,
  },
});

const left = {
  textAlign: 'left',
}

export default function GridCard() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://yt3.ggpht.com/ytc/AKedOLTcGcQHpQeWfBIeiYS2ojAGnjVCtZZ4PrJg1vjUkA=s900-c-k-c0x00ffffff-no-rj"
            title="EFAP"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" style={left}>
              <b>EFAP - International School of Information</b>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={left}>
            The international strategy is at the core of our curriculums, it is a number one priority 
            to give the students the possibility to travel around the world during their studies.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{float: 'right'}}>
          <Button size="small" color="primary" style={{textTransform: 'none', color: '#18A0FB'}}>
            See more &gt;&gt;
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

