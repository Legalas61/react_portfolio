import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Other from './404/404'
import MyWork from './MyWork/myWork'
import Main from './Main/Main'
import AboutMy from './AboutMy/aboutMy'

export default function App() {
  return (
    <div className="App">
           <Switch>
            <Route exact path="/"  component={Main}/>
            <Route exact path="/aboutMy"  component={AboutMy}/>
            <Route exact path="/myWork"  component={MyWork}/>
            <Route component={Other} />
        </Switch>
    </div>
  );
}
