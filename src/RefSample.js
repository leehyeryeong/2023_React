import React, { Component } from "react";

class RefSample extends Component {
  //멤버변수로 React.createRef()에 의해서 ref 생성하기
  input = React.createRef();
  
  handleFocus = () => {
  this.input.current.focus();
  };

  render() {
    return (
      <div>
        {/* ref 달아줄 요소에 ref props로 넣어주기 */}
        <input ref={this.input} />
        <button onClick={this.handleFocus}>Click</button>
      </div>
    );
  } 
}

export default RefSample;