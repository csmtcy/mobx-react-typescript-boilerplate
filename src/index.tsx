import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import Global from './utils/global';
import { Button } from 'antd-mobile';
import Counter from './models/Counter';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "./utils/routes";
import "./i18n";
import DevTools from 'mobx-react-devtools';
Global.isDevelopment(require("./theme/main.scss")); // only require this when development mode, because of webpack-dev-server
import { useTranslation, Trans } from "react-i18next";

function AppRouter() {

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Button onClick={() => changeLanguage("en")}>English</Button>
              <Button onClick={() => changeLanguage("cn")}>Chinese</Button>
            </li>
          </ul>
        </nav>
      </div>
      <Routes />
      { Global.isDevelopment(<DevTools />) }
    </Router>
  );
}

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


ReactDOM.render(<AppRouter />, document.getElementById('root'));


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