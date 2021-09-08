import React from "react";
import {
  useState,
  useEffect } from 'react';
import {
  useParams,
  useLocation } from 'react-router-dom';
import {
  Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 500,
  },
  media: {
    height: 280,
  },
});

const left = {
  textAlign: 'left',
}

export default function UserProfile() {
  const classes = useStyles();

  return(
    <div>
      <div style={{backgroundColor: '#f1f1f1'}}>
        <br/><br/><br/>
        <div className="row" style={{ width: '50%', margin: 'auto', marginBottom: '25px', backgroundColor: 'white' }}>
          <Container>
            <div className="row" style={{ width: '50%', margin: 'auto', marginBottom: '25px', marginTop: '50px', backgroundColor: 'white' }}>
              <Card>
                  <CardMedia
                    className={classes.media}
                    image="https://www.thesun.co.uk/wp-content/uploads/2018/11/NINTCHDBPICT0004470967121.jpg"
                    title="EFAP"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{textAlign: 'center'}}>
                      <b>Gorgeous George</b>
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'center'}}>
                    DATE OF BIRTH: <span style={{color: 'black'}}>11/09/2001</span>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{textAlign: 'center'}}>
                    LOCATION: <span style={{color: 'black'}}>HO CHI MINH CITY</span>
                    </Typography>
                  </CardContent>
                <CardActions style={{float: 'right'}}>
                  
                </CardActions>
              </Card>
            </div>
          </Container>
          <br/><br/><br/>
          <Button style={{width: '125px', margin: 'auto', marginTop: '30px', marginBottom: '30px', backgroundColor: '#18A0FB'}}>
            Edit Profile
          </Button>
        </div>
        <br/><br/><br/>
        
      </div>
    </div>
  )
}