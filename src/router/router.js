import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Bundle from './Bundle';
import Loading from 'components/Loading/Loading';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Index';
import Register from 'bundle-loader?lazy&name=home!pages/Register/Index';
import Price from 'bundle-loader?lazy&name=home!pages/Price/Index';
import Download from 'bundle-loader?lazy&name=home!pages/Download/Index';
import Help from 'bundle-loader?lazy&name=home!pages/Help/Index';
import PCClient from 'bundle-loader?lazy&name=home!pages/Help/pc-client';
import Question from 'bundle-loader?lazy&name=home!pages/Help/question';
import Account from 'bundle-loader?lazy&name=home!pages/Help/account';
import Freshman from 'bundle-loader?lazy&name=home!pages/Help/freshman';
import Reset from 'bundle-loader?lazy&name=home!pages/Reset/Index';
import Login from 'bundle-loader?lazy&name=home!pages/Login/Index';
import Pay from 'bundle-loader?lazy&name=home!pages/Pay/Index'
import Collaborate from 'bundle-loader?lazy&name=home!pages/Collaborate/index'
import AccountProblem from 'bundle-loader?lazy&name=home!pages/Help/Help-Detail/account-problem';
import PasswordProblem from 'bundle-loader?lazy&name=home!pages/Help/Help-Detail/password-problem';
import AccelerationProblem from 'bundle-loader?lazy&name=home!pages/Help/Help-Detail/acceleration-problem';
import LoginProblem from 'bundle-loader?lazy&name=home!pages/Help/Help-Detail/login-problem';
import ModeProblem from 'bundle-loader?lazy&name=home!pages/Help/Help-Detail/mode-problem';
import TapProblem from 'bundle-loader?lazy&name=home!pages/Help/Help-Detail/tap-problem';
import GameProblem from 'bundle-loader?lazy&name=home!pages/Help/Help-Detail/game-problem';

import NotFound from 'bundle-loader?lazy&name=home!pages/NotFound/Index';

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={createComponent(Home)}/>
            <Route path="/register" component={createComponent(Register)}/>
            <Route path="/price" component={createComponent(Price)}/>
            <Route path="/download" component={createComponent(Download)}/>
            <Route path="/help" component={createComponent(Help)}/>
            <Route path="/pc-client" component={createComponent(PCClient)}/>
            <Route path="/question" component={createComponent(Question)}/>
            <Route path="/account" component={createComponent(Account)}/>
            <Route path="/freshman" component={createComponent(Freshman)}/>
            <Route path="/reset" component={createComponent(Reset)}/>
            <Route path="/login" component={createComponent(Login)}/>
            <Route path="/pay/:type" component={createComponent(Pay)}/>
            <Route path="/collaborate" component={createComponent(Collaborate)}/>
            <Route path="/account-problem" component={createComponent(AccountProblem)}/>
            <Route path="/password-problem" component={createComponent(PasswordProblem)}/>
            <Route path="/acceleration-problem" component={createComponent(AccelerationProblem)}/>
            <Route path="/login-problem" component={createComponent(LoginProblem)}/>
            <Route path="/mode-problem" component={createComponent(ModeProblem)}/>
            <Route path="/tap-problem" component={createComponent(TapProblem)}/>
            <Route path="/game-problem" component={createComponent(GameProblem)}/>
            
            <Route component={createComponent(NotFound)}/>
        </Switch>
    </div>
);
