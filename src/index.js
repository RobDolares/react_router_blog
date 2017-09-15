import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BaseLayout from './components/BaseLayout';
import App from './components/App';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/react_router_blog" component={App}/>
        <Route path="/createpost" component={CreatePost}/>
        <Route path="/showposts/:id" component={ShowPost}/>
        <Route path="/showposts" component={PostList}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
