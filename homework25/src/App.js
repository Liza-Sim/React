import React, { Component } from 'react';
import './App.css';
import Button from "./component/Button"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: "", mark: '', result:''};
  }
  showClean = () => {
    this.setState(() => {
      return { count: '', mark: '', result: '',}
    })
  }
  showClick = (event) => { 
    this.setState(prevState => {
      if (prevState.mark === '+') {
        return {
          count: event.target.value,
          result: Number(prevState.count) + Number(event.target.value),
          mark:''
        }
      } else if (prevState.mark === '-') {
         return {
          count: event.target.value,
          result: Number(prevState.count) - Number(event.target.value),
          mark:''
        }
      } else if (prevState.mark === '*') {
         return {
          count: event.target.value,
          result: Number(prevState.count) * Number(event.target.value),
          mark:''
        }
      } else if (prevState.mark === '/') {
         return {
          count: event.target.value,
          result: Number(prevState.count) / Number(event.target.value),
          mark:''
        }
      } else {
        return {
        count: prevState.count + event.target.value,
        }
      }
    })
  }
  operatorFunc = (event) => {
    this.setState(prevState => {
      if (prevState.result !== '') {
        return {
          mark: event.target.value,
          count: prevState.result,
      }}
      return {
        mark: event.target.value,
      }
    })
  }
  showZnak = () => {
    this.setState((prevState) => {
      if (prevState.count > 0) {
        return {
        count: -prevState.count,
        } 
      } else {
        return {
        count: Math.abs(prevState.count),
      }
      }
    }) 
  }
  showPow = () => {
    this.setState((prevState) => {
      return {
        count: Math.pow(prevState.count, 2),
        mark: '',
        result: '',
      }
    })
  }
  showCube = () => {
    this.setState((prevState) => {
      return {
        count: Math.pow(prevState.count, 3),
        mark: '',
        result: '',
      }
    })
  }
  showSqrt = () => {
    this.setState((prevState) => {
      return {
        count: Math.sqrt(prevState.count),
        mark: '',
        result: '',
      }
    })
  }
  showResult = () => {
    this.setState((prevState) => {
      return {
        count: prevState.result,
        mark: '',
        result: '',
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Button value="Cl" id="clean" className="oper" callback={this.showClean} />
        <input id="input" type="text" className="oper" defaultValue={this.state.count} />
        <Button value="x²" id="pow" className="oper" callback={this.showPow} />
        <Button value="x³" id="cube" className="oper" callback={this.showCube} />
        <Button value="√x" id="sgrt" className="oper" callback={this.showSqrt} />
        <Button value="7" id="button7"  callback={this.showClick} />
        <Button value="8" id="button8" callback={this.showClick} />
        <Button value="9" id="button9" callback={this.showClick} />
        <Button value="4" id="button4" callback={this.showClick} />
        <Button value="5" id="button5" callback={this.showClick} />
        <Button value="6" id="button6" callback={this.showClick} />
        <Button value="1" id="button1" callback={this.showClick} />
        <Button value="2" id="button2" callback={this.showClick} />
        <Button value="3" id="button3" callback={this.showClick} />
        <Button value="0" id="button0" callback={this.showClick} />
        <Button value="+" id="amount" className="oper" callback={this.operatorFunc} />
        <Button value="-" id="min" className="oper" callback={this.operatorFunc} />
        <Button value="*" id="multiplication" className="oper" callback={this.operatorFunc} />
        <Button value="/" id="division" className="oper" callback={this.operatorFunc} />
        <Button value="." id="dot"  callback={this.showClick} />
        <Button value="=" id="equals" className="oper" callback={this.showResult} />
        <Button value="+/-" id="znak" className="oper" callback={this.showZnak} />
      </div>
    )
  }
}

export default App;
