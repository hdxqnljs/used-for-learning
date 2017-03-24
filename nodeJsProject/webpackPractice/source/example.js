// var message = require('./message.json');

// module.exports = function () {
// 	var div = document.createElement("div");
// 	div.textContent = message.greetText;
// 	return div;
// }
import React, {Component} from 'react'
import message from './message.json';

class Greeter extends Component{
  render() {
  	let items = [];
  	let k = 0;
  	for(let i in message){
  		//items.push({title:i,content:message[i]});
  		items.push(<li className="li-el" key={k} >{i} : {message[i]}</li>);
  			k+=1;
  	}
    return (
      <ul className="u-el">
      		{items}
      </ul>
    );
  }
}

export default Greeter 