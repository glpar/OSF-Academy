import React, {Component} from "react";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Grid.css'

class Grid extends Component{

    render(){
        return(
            <div class="container">
            <div class="row">
              <div class="col-md-auto">
                <Card/>
              </div>
              <div class="col-md-auto">
                <Card/>
              </div>
              <div class="col-md-auto">
                <Card/>
              </div>
              <div class="col-md-auto">
                <Card/>
              </div>
              <div class="col-md-auto">
                <Card/>
              </div>
              <div class="col-md-auto">
                <Card/>
              </div>
              <div class="col-md-auto">
                <Card/>
              </div>
              <div class="col-md-auto">
                <Card/>
              </div>
              <div class="col-md-auto">
                <Card/>
              </div>
              <div class="col-md-auto">
                <Card/>
              </div>
              <div class="col-md-auto">
                <Card/>
              </div>
              <div class="col-md-auto">
                <Card/>
              </div>
            </div>
          </div>
        )
    }

}

export default Grid;