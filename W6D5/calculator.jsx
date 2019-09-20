import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: "", num2: "", result: 0}; 
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this); 
    this.add = this.add.bind(this); 
    this.subtract = this.subtract.bind(this) 
    this.multiply = this.multiply.bind(this) 
    this.clear = this.clear.bind(this) 
  }

  setNum1(e){
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num1 });
  }

  setNum2(e) {
      const num2 = e.target.value ? parseInt(e.target.value) : ""; 
      this.setState({ num2 }) // recall syntactic sugar if your key is the same as your value you can just do the key. eqiv to num2: num2 
  }

  add(e) {
      e.preventDefault()
      const result = this.state.num1 + this.state.num2; 
      this.setState({ result })
  }

  subtract(e) {
      e.preventDefault()
      const result = this.state.num1 - this.state.num2;
      this.setState({ result })
  }

  multiply(e){
    e.preventDefault();
    const result = this.state.num1 * this.state.num2;
    this.setState({ result });
  }

  clear(e) {
      e.preventDefault()
      const num1 = this.state.num1 = "" 
      const num2 = this.state.num2 = ""
      const result = this.state.result = 0  
      this.setState({num1})
      this.setState({num2})
      this.setState({result})
  }

  render() {
    const { num1, num2, result } = this.state; // recall in line 58 vs 59 its more dry bc of this constant we dont have to use this.state.num1 but can just say num1.
    return (
      <div>
        <h1> {result} </h1> 
        <input onChange={this.setNum1} value={num1}/>  
        <input onChange={this.setNum2} value={this.state.num2}/>
        <button onClick={this.add} >Add</button>
        <button onClick={this.subtract} >subtract</button>
        <button onClick={this.multiply} >multiply</button>
        <button onClick={this.clear} >clear</button>
      </div>
    );
  }
}

export default Calculator;