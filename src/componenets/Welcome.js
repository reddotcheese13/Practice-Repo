import React, { Component } from 'react'

class Welcome extends Component{
    constructor(){
        super();
        this.state={
            message:'Welcome '
        }
    }
    changeMessage(){
        this.setState({
            message:"Thanks for subscribing "
        })
    }
    render(){
        const {name}=this.props
        return (<div>
            <h1>{this.state.message} {name}</h1>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
            </div>)
        
    }
}
export default Welcome