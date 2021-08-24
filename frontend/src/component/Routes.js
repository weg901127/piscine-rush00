import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Login";
import Post from "./Post";
import NewPost from "./NewPost";
import Home from "./Home";
import Profile from "./Profile";
import Register from "./Register";
import Logout from './Logout';
import PostDetail from './PostDetail';
const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/post" component={Post} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
            <Route path="/new" component={NewPost} />
            <Route path="/detail/:Id" component={PostDetail} />
        </Switch>
    );
}
export default Routes;