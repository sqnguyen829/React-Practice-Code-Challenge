import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis:[],
    plates:[],
    index:0,
    money:100
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({
      sushis:data
    }))
  }

  nextSushis = () => {
    if(this.state.index === 95){
      this.setState({
        index:0
      })
    }else{
      this.setState({
        index:this.state.index+5
      })
    }
  }

  eatSushi = (sushi) => {
    if(!this.state.plates.includes(sushi) && this.state.money>sushi.price){
      this.setState({
        plates:[...this.state.plates, sushi],
        money:this.state.money - sushi.price
      })
    }
  }

  render() {
    let sushis = this.state.sushis.slice(this.state.index, this.state.index+5)
    return (
      <div className="app">
        <SushiContainer sushis={sushis} 
                        nextSushis={this.nextSushis}
                        eatSushi={this.eatSushi}
                        plates={this.state.plates}
        />
        <Table plates={this.state.plates} money={this.state.money}/>
      </div>
    );
  }
}

export default App;