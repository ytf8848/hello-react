import React, { Component } from 'react';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
constructor(){
  super();
  this.state = {
    homeLinks: "Home aaa",
    homeMounted: true
  }
}

  onGreet(age){
    alert("hello"+age);
  }

  onChangeLinkName(newName){
    console.log("aa "+newName);
    this.setState({
      homeLinks:newName
    })
  }

  onChangeHomeMounted(){
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }

  render() {
    const user={
      name:"anna",
      hobbies:["Sports","Reading"]
    }

    let homeCmp="";
    if(this.state.homeMounted){
      homeCmp =(
        <Home name={"Max"} initialAge={12} greet={this.onGreet} changeLink={this.onChangeLinkName.bind(this)} initialName={this.state.homeLinks} />

      );
    }

    return (
      <div className="Container">
      <div className="row">
        <div className="col-xs-1 col-xs-offset-11">
            <Header homeLink={this.state.homeLinks} />
        </div>
      </div>

        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Hello !!</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
                {homeCmp}
          </div>
        </div>

        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
              <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un)mount Home Component</button>
          </div>
        </div>

      </div>


    );
  }
}

export default App;
