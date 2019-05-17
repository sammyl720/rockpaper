import React, { Component } from 'react';

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
    render() {
    return (
      <div className={"player-"+this.props.name}>
        <h3 className="player-title">
          {this.props.name}
        </h3>
        <div>
          {this.props.currentHand}
          {/* <img src={"../static/imgs/"+ this.props.currentHand+".jpg"}alt={this.props.currentHand}/> */}
        </div>
        <Controls name={this.props.name}
        paperSelected={this.props.paperHandler}
        scissorSelected={this.props.scissorHandler}
        rockSelected={this.props.rockHandler}

         />
      </div>
    );
  }
}

export default Player;