// var message = require('./message.json');

// module.exports = function () {
// 	var div = document.createElement("div");
// 	div.textContent = message.greetText;
// 	return div;
// }
import React, {Component} from 'react'
import message from './message.json';

class Greeter extends Component{
  constructor(props) {
    super(props);
    this.state = {
      content: "noting to show!"
    };
    this.console = this.console.bind(this);
  }
  console(arg){ 
    if( typeof arg == 'string'){
      console.log(arg);
    }else if( typeof arg == 'object' ){
      arg.stopPropagation();
      arg.nativeEvent.stopImmediatePropagation();
      this.setState({content:arg.target.innerText}, () => console.log(this.state));
    }
  }
  componentDidMount() {
    this.console("组件安装完毕");
  }
  render() {
  	let items = [];
  	let k = 0;
  	for(let i in message){
  		items.push(<li className="li-el" onClick={this.console} key={k} >{i} : {message[i]}</li>);
  			k+=1;
  	}  
    return ( 
      <ul className="u-el" onClick={() => console.log("clicked")}>
        <li className="li-el" key={Date.now()} >{this.state.content}</li>
      		{items}
          <LastliElement content="this is the end" />
      </ul>
    );
  }
}

var LastliElement = (props, context) => {
  return <li className="li-el">{props.content}</li>
};

export default Greeter 