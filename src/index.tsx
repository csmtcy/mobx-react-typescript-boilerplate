import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import Global from './utils/global';
import Counter from './models/Counter';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./i18n";
Global.isDevelopment(require("./theme/main.scss")); // only require this when development mode, because of webpack-dev-server
import AppLayout from './components/appLayout'

// @observer
// class HomeScreen extends React.Component<{counter: Counter}, {}> {
//     render() {
//         return (
//             <div>
//                 <Button onClick={this.onReset}>
//                     Seconds passed: {this.props.counter.timer}
//                 </Button>
//                 {
//                     Global.isDevelopment(<DevTools />)
//                 }
//             </div>
//         );
//      }

//      onReset = () => {
//          this.props.counter.resetTimer();
//      }
// };


// const counter = new Counter();


ReactDOM.render(<AppLayout />, document.getElementById('root'));


/******
 * 

EXAMPLE (https://medium.com/@visikov/getting-started-with-react-typescript-mobx-and-webpack-4-8c680517c030)
----------


import React from 'react'
import { Component } from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'

import { TodoStore } from './todo.store'

interface TodoAddProps {
  todoStore?: TodoStore
}

@inject('todoStore')
@observer
class TodoAdd extends Component<TodoAddProps> {
  @observable private task: string = ''

  handleTaskChange = ({ currentTarget: { value } }: React.SyntheticEvent<HTMLInputElement>) => {
    this.task = value
  }

  handleAddTodo = () => {
    this.props.todoStore.addTodo(this.task)
    this.task = ''
  }

  render() {
    return (
      <div>
        <label>New Task</label>
        <input value={this.task} onChange={this.handleTaskChange} />
        <button onClick={this.handleAddTodo}>Add</button>
      </div>
    )
  }
}


 * 
 * 
 */