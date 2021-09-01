import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Col, Row } from 'react-bootstrap';

const useStyles = makeStyles({
  root: {
    maxHeight: 165,
  },
  media: {
    height: 165,
  },
});

const left = {
  textAlign: 'left',
}

export default function ListCard() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <Row>
          <Col xs={3}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://yt3.ggpht.com/ytc/AKedOLTcGcQHpQeWfBIeiYS2ojAGnjVCtZZ4PrJg1vjUkA=s900-c-k-c0x00ffffff-no-rj"
                title="EFAP"
              />
            </CardActionArea>
          </Col>
          <Col xs={9}>
            <CardActionArea>
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
          </Col>
        </Row>
      </Card>
    </div>
  )
}

