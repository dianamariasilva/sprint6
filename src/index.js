import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Register from './Register';
import TrelloApp from './TrelloApp';
import {Provider} from 'redux-zero/react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import store from './store'
import registerServiceWorker from './registerServiceWorker';

const Index = () =>  (
   <Provider store={store}> 
      <HashRouter>
         <Switch>
            <Route name="login" exact path = "/login" component = {Login}/>
            <Route name="register"  exact path = "/register" component = {Register}/>         
            <Route name="home"  exact path = "/home" component = {App}/>
            {/* <Route name="trello"  exact path = "/trello" component = {TrelloApp}/> */}
         </Switch>
      </HashRouter>
   </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

