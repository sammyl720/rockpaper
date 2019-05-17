import React, { Component } from 'react';
import Rock from "../static/imgs/rock.jpg";
import Paper from "../static/imgs/paper.jpg";
import Scissor from "../static/imgs/scissor.jpg";

const Controls = (props)=>{
  if(props.name === "player"){
    return(
      <div className="controls">
        <button onClick={props.rockSelected}>Rock</button>
        <button onClick={props.scissorSelected}>Scissor</button>
        <button onClick={props.paperSelected}>Paper</button>
        
      </div>
    );
  }else{
    return null;
  }
}

class Player extends Component {
    constructor(props){
      super(props);
      this.state = {
        links:{
          Rock: Rock,
          Paper:Paper,
          Scissor: Scissor,
        }
      }
    }

    render() {
    return (
      <div className={"player-"+this.props.name}>
        <h3 className="player-title">
          {this.props.name}
        </h3>
        <div>
          <h5>
            {this.props.currentHand}
          </h5>
          <img 
            src={this.state.links[[this.props.currentHand]]}
           alt={this.props.currentHand}
           width="80px"
           height="100px"
          
           />
        </div>
        <Controls name={this.props.name}
        paperSelected={this.props.paperHandler}
        scissorSelected={this.props.scissorHandler}
        rockSelected={this.props.rockHandler}

         />
         <h5>Hands Won: {this.props.won}</h5>
      </div>
    );
  }
}

export default Player;