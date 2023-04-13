
import React from "react";
// var now = new Date();
// var eva = new Human('eva');
// var alyssa = new Human('alyssa');

// var eva = {
//     Name: "eva"
// };
// var alyssa = {
//     name: "alyssa"
// };


// class Human {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi(){
//     console.log(`Hello. I amd human and my name is ${this.name}`)
//   }
// }

class TodoEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        items: [
            'My item one',
            'My item two',
            'My item three'
        ]
    }
    // this.state = {
    //   counter: 0
    // };

  }

  onBtnClick(){
    //alert('Hello!');
    //debugger;
    this.state.items.push('Hello');
    this.setState(this.state.items);
  }

  render(){
        return(
            <div className="container">
                <div className="input-container">
                    <input type="text" placeholder="Enter text"/>
                    <button onClick={this.onBtnClick.bind(this)} type="button">✅</button>
                </div>
                <div className="completed-container">
                    <ul className="completed-list">
                        {
                            this.state.items.map(item => 
                            <li>
                                <button type="button">❎</button>
                                <span>{item}</span>
                            </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoEditor;