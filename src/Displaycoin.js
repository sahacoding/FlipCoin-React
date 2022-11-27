import React, { Component } from 'react'
class Displaycoin extends Component{
    render(){
        return <img src={this.props.info.imgSrc} alt= {this.props.info.side}/>
    }
}
export default Displaycoin