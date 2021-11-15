import React, {Component} from "react";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Grid.css'
class Grid extends Component{

    render(){
        return(
            <div className="container col-md-auto">
                  <Card className="card1"/>
                  <Card className="card2"/>
                  <Card className="card3"/>
                  <Card className="card4"/>
                  <Card className="card5"/>
                  <Card className="card6"/>
                  <Card className="card7"/>
                  <Card className="card8"/>
                  <Card className="card9"/>
                  <Card className="card10"/>
                  <Card className="card11"/>
                  <Card className="card12"/>
                </div>
        )
    }

}

export default Grid;