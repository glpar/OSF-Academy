import React, {Component} from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Header from './components/Header'

export default class App extends Component {
  render(){
    return (
      <div className= "menu">
      <Header/>
      <Grid/>
      </div>
    );
  }
}
