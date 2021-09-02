import React from 'react'
import './style.css'
import Header from './header'
import Fundraiser from './fundraiser'
import JoinToDay from './join-today'
import Contact from './contact'
import Footer from './footer'

export default function MainComponent(){
    return (
        <>
            <Header />
            <Fundraiser />
            <JoinToDay />
            <Contact />
            <Footer />
        </>
    )
}