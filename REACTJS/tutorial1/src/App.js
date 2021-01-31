import React, { Component } from 'react'
import Footer from './components/footer'
import Header from "./components/header"
import Home from './components/home'

function App(){
  return(
    <div>
      this is APP.js <div class="container">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
