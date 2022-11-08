import React from 'react';

export default class SecondCounter extends React.Component {
  constructor (props) {
    super(props);
    console.log(props)
    this.state = {
      currentCount: props.start || 0
    };
  }

  render () {
    console.log('render');
    return (
      // <div className="mx-auto content-alaign-center text-align-center">

      // </div>
        <h1 className="text-center align-self-center">{this.state.currentCount}</h1>
    );
  }

  // div.banner__buttons>button.banner__buttons

  componentDidMount() {
    console.log('componentDidMount');

    setInterval(() => {
      this.setState((state) => ({
        currentCount: state.currentCount + 1
      }));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return nextState.currentCount % 2 === 0;
    // return nextState.currentCount;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timer)
  }

}