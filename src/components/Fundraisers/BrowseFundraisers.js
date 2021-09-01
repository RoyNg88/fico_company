import React from "react";
import {
  useState,
  useEffect } from 'react';
import {
  useParams,
  useLocation } from 'react-router-dom';
import {
  Button, Form, InputGroup, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import { FaSearch } from 'react-icons/fa';
import { RiLayoutGridFill } from 'react-icons/ri'
import { IoList } from 'react-icons/io5'

import GridCard from "./GridCard";
import ListCard from "./ListCard";

export default function BrowseFundraisers() {

  const [view, setView] = useState('gridView');

  const setListView = () => {
    setView('listView')
  }

  const setGridView = () => {
    setView('gridView')
  }

  const left = {
    textAlign: 'left',
  }

  return (
    <div>
      <div style={{backgroundColor:'#f1f1f1'}}>
        <br/>
        <div className="row" style={{ width: '80%', margin: 'auto', marginBottom: '25px' }}>
          <br/>
          <h1 style={left}>Browse fundraisers</h1>
          <br/><br/><br/>
          <h4 style={left}>People around the world are raising money 
            for what they are passionate about.</h4>
          <br/>
        </div>
        <br/>
      </div>
      <br/>
      <div className="row" style={{ width: '80%', margin: 'auto', marginBottom: '25px' }}>
        <Row>
          <Col xs={4} md={4}>
            <InputGroup className="mb-3">
              <InputGroup.Text><FaSearch/></InputGroup.Text>
              <Form.Control type="text" placeholder="Search"/>
              {/* <Button><FaSearch/></Button> */}
            </InputGroup>
          </Col>
          <Col xs={2} md={2}>
            <Form.Control as="select">
              <option>--Select Category--</option>
              <option>COVID</option>
              <option>Poor People</option>
            </Form.Control>
          </Col>
          <Col xs={1}>
            <Button style={{backgroundColor: '#18A0FB'}}>Search</Button>
          </Col>
          <Col xs={5} md={5}>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={setListView}><IoList/> List</Button>
              <Button variant="secondary" onClick={setGridView}><RiLayoutGridFill/> Grid</Button>
            </div>
          </Col>
        </Row>
      </div>
      {
        (view === "gridView" ? 
          <div className="row" style={{ width: '80%', margin: 'auto', marginBottom: '25px' }}>
            <Container>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6} lg={4}>
                  <GridCard/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <GridCard/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <GridCard/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <GridCard/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <GridCard/>
                </Grid>
              </Grid>
            </Container>
          </div>
        : <div className="row" style={{ width: '80%', margin: 'auto', marginBottom: '25px' }}>
            <Container>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <ListCard/>
                </Grid>
                <Grid item xs={12}>
                  <ListCard/>
                </Grid>
                <Grid item xs={12}>
                  <ListCard/>
                </Grid>
              </Grid>
            </Container>
          </div>
        )
      }
    </div>
      
  )
}

