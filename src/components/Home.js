import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state ={
      age:props.initialAge,
      status:0,
      homeLink: props.initialName
    }
    setTimeout(() => {
      this.setState({
            status:1
      })
    },3000)


  }

  onMakeOlder(){
     this.setState({
       age:this.state.age+3
     })
  }

handleGreet(){
  this.props.greet(this.state.age)
}

onChangeLink(){
    this.props.changeLink(this.state.homeLink);
}

onHandleChange(event){
  this.setState({
    homeLink: event.target.value
  })
}

componentWillMount(){
  console.log("Component will mount");
}

componentDidMount(){
  console.log("Component did mount");
}

componentWillReceiveProps(nextProps){
  console.log("Component will receive props",nextProps);
}

shouldComponentUpdate(nextProps,nextState){
  console.log("Component should update",nextProps,nextState);
  if(nextState.status ===1){
    return false;
  }
  return true;
}

componentWillUpdate(nextProps,nextState){
  console.log("Component will update",nextProps,nextState);
}

componentDidUpdate(prevProps,prevState){
  console.log("Component did update",prevProps,prevState);
}

componentWillUnmount(){
  console.log("Component will unmount");
}

  render() {
    return (
      <div className="Container">
        <div >
          <div className="col-xs-1 col-xs-offset-5">
            <div>your name is {this.props.name}, your age is {this.state.age}</div>
            <p>Status:{this.state.status}</p>
            <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">Make me older</button>
            <br/>
            <button onClick={this.handleGreet.bind(this)} className="btn btn-primary"> Greet</button>
            <br/>
            <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
            <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary"> Change head Link</button>
          </div>
        </div>
      </div>
    );
  }
}


Home.propTypes = {
  name: PropTypes.string,
  age:PropTypes.number,
  user:PropTypes.object,
  greet:PropTypes.func,
  initialName:PropTypes.string
};
