import React, {useEffect, useState} from "react";
import axios from 'axios'
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
const right = {
  textAlign: 'right',
}

export default function GridCard(props) {
  const classes = useStyles();
  
  return (
    
    <div className="grid-container">
      {props.projects.map(p => (
      <Card className={classes.root} key={p.id}>
        <CardActionArea>
          <CardMedia>
          <img src={'http://localhost:4001' + p.image} alt="Fimage" style={{width: '356px', height: '220px', float: 'left', padding: '10px'}}/>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2" style={left}>
              <b>{p.title}</b>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={right}>
              <b>{p.donate}</b>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={left}>
            {p.information}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{float: 'right'}}>
          <Button size="small" color="primary" style={{textTransform: 'none', color: '#18A0FB'}}>
            See more &gt;&gt;
          </Button>
        </CardActions>
      </Card>
      ))}
    </div>
  )
}

