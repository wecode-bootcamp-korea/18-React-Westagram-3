import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


// 경현's 컴포넌트 
import LoginHyun from './Pages/hyun/Login/Login';
import MainHyun from './Pages/hyun/Main/Main';
// 승옥's 컴포넌트 
import LoginOk from './Pages/ok/Login/Login';
import MainOk from './Pages/ok/Main/Main';
// 송희's 컴포넌트 
import LoginSong from './Pages/song/Login/Login';
import MainSong from './Pages/song/Main/Main';
// 선아's 컴포넌트 
import LoginSuna from './Pages/suna/Login/Login';
import MainSuna from './Pages/suna/Main/Main';


class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
            <Route exact path='/login-hyun' component={LoginHyun} />
            <Route exact path='/main-hyun' component={MainHyun} />
            <Route exact path='/login-ok' component={LoginOk} />
            <Route exact path='/main-ok' component={MainOk} />          
            <Route exact path='/login-song' component={LoginSong} />
            <Route exact path='/main-song' component={MainSong} />          
            <Route exact path='/login-suna' component={LoginSuna} />
            <Route exact path='/main-suna' component={MainSuna} />          
          </Switch>
        </Router>
      )
    }
  }
  
  export default Routes;