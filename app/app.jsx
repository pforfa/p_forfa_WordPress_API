var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Post = require('Post');
var About = require('About');
var Search = require('Search');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Additional css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="search" component={Search}/>
      <IndexRoute component={Post}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
