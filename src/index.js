import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Board from './components/Board/Board'
// import TrelloApp from './TrelloApp';
import {Provider} from 'redux-zero/react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import store from './store'
import registerServiceWorker from './registerServiceWorker';

const Index = () =>  (
   <Provider store={store}> 
      <HashRouter>
         <Switch>
            <Route name="signin" exact path = "/" component = {SignIn}/>
            <Route name="signin" exact path = "/signin" component = {SignIn}/>
            <Route name="signup" exact path = "/signup" component = {SignUp}/>    
            <Route name="board" exact path = "/board" component = {Board}/>        
         </Switch>
      </HashRouter>
   </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();