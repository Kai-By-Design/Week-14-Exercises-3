import React from 'react';
import SecondCounter from './second-counter';

export default class SecondCounterContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      showCounter: true
    };
  }

  render() {
    return (
      <div className="jumbotron border-3 border-danger m-5 bg-success">
        {this.state.showCounter ? <SecondCounter /> : null}
        {/* <hr></hr> */}
        {/* {<div><br></br>'frrefre' </div>} */}
        {/* {this.state.showCounter ? <SecondCounter /> : null} */}
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        showCounter: false
      });
    }, 11000);
  }
}