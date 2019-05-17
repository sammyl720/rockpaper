import React, { Component } from 'react';
import Player from "./Player";

const hand = ["Rock", "Paper", "Scissor"];
class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      hand: 0,
      players:[
      {
        name: "player",
        currentHand: "Paper",
        handsWon: 0,
        result: "",
      },
      {
        name:"computer",
        currentHand: "Rock",
        handsWon: 0,
      },
    ]};
    this.paperHandler =this.paperHandler.bind(this);
    this.scissorHandler =this.scissorHandler.bind(this);
    this.rockHandler =this.rockHandler.bind(this);

  }
  componentWillUpdate(prevProps, prevState){
    if(prevState.hand !== this.state.hand){
      let players = [...this.state.players];
      switch(players[0].currentHand){
        case "Rock":
          if(players[1].currentHand === "Scissor"){
            players[0].result = "Won";
            players[0].handsWon += 1;
          }else if(players[1].currentHand === "Rock"){
            players[0].result = "Tied";
  
          }else{
            players[0].result = "Lost";
          };
          break;
        case "Scissor":
            if(players[1].currentHand === "Paper"){
              players[0].result = "Won";
              players[0].handsWon += 1;
            }else if(players[1].currentHand === "Scissor"){
              players[0].result = "Tied";
    
            }else{
              players[0].result = "Lost";
            };
            break;
         case "Paper":
            if(players[1].currentHand === "Rock"){
              players[0].result = "Won";
              players[0].handsWon += 1;
            }else if(players[1].currentHand === "Paper"){
              players[0].result = "Tied";
    
            }else{
              players[0].result = "Lost";
            };
            break;
            default:
              console.log("hmmm...");
  
        }
      this.setState({players});

    }
    
  }
  paperHandler(){
    let players = [...this.state.players];
    
    players[0].currentHand = "Paper";
    players[1].currentHand = hand[Math.floor(Math.random()* hand.length)];
    this.setState({
      hand: this.state.hand + 1,
      players:players,
    });
  }
  scissorHandler(){
    let players = [...this.state.players];
    
    players[0].currentHand = "Scissor";
    players[1].currentHand = hand[Math.floor(Math.random()* hand.length)];
    this.setState({
      hand: this.state.hand + 1,
      players:players,
    });
  }
  rockHandler(){
    let players = [...this.state.players];
    
    players[0].currentHand = "Rock";
    players[1].currentHand = hand[Math.floor(Math.random()* hand.length)];
    this.setState({
      hand: this.state.hand + 1,
      players:players,
    });
  }
  render() {
    const players = this.state.players.map((player,index)=>{
      return(<Player
       className={player.name}  name={player.name} currentHand={player.currentHand} key={index} 
        rockHandler={this.rockHandler}
        paperHandler={this.paperHandler}
        scissorHandler={this.scissorHandler}

       />)
    });
    const result = this.state.players[0].result.length <= 1 ? <h1 className="title">Rock Paper, Scissor</h1> : <h3 className="title">You {this.state.players[0].result}</h3>;
    return (
      <div className="board">
        {result}
        <h4>Hands {this.state.hand}</h4>
        {players}
      </div>
    );
  }
}

export default Board;