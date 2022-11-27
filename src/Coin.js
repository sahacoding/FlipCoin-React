import React, { Component } from 'react'
import {choice} from './helper'
import Displaycoin from './Displaycoin'
class Coin extends Component{
    static defaultProps = {
        coins: [
            {side: "tails", imgSrc:'https://en.numista.com/catalogue/photos/inde/3165-original.jpg'},
            {side: "heads", imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFT5XDioBw49DSxxQE7OGvReOHEpEDdziw-Q&usqp=CAU'}
        ]
    }
    constructor(props){
        super(props);
        this.state = { 
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
                  }
        this. handleCLick = this. handleCLick.bind(this)
     }
     flip(e){
       const newCoin = choice(this.props.coins)
       this.setState(st => {
        return {
            currCoin : newCoin,
            nFlips: st.nFlips + 1,
            nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
            nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
        }
       })
     }
    handleCLick(){
       this.flip();
       
    }
    render(){
        return(
               <div>
                <h1>Coin Flip</h1>
               <h2>Lets flip a Coin</h2>
              <button onClick={this.handleCLick}>Coin Fliping</button>
              {this.state.currCoin && <Displaycoin info = {this.state.currCoin}/>}
                <p>Out of {this.state.nFlips} flips, there have been 
                {this.state.nHeads}{""}
                heads and {this.state.nTails} tails.
                </p>
               </div>
        )
    }
}

export default Coin