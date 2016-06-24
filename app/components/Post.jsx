var React = require('react');
var PostForm = require('PostForm');
var PostMessage = require('PostMessage');
// var ErrorModal = require('ErrorModal');
var Wordpress = require('Wordpress');

var Post = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function () {
    //console.log("Inside handleSearch function in Post.jsx ");
    var that = this;

    this.setState({
      isLoading: true
    });

    Wordpress.getPosts().then(function (data) {
      //console.log("Calling WordPress.js' getPosts from inside Post.jsx using handleSearch function");
      that.setState({
        data: data,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false
      });
    });
  },
  render: function () {
    var {isLoading, data} = this.state;

    function renderMessage () {
      if(isLoading) {
        return <h4 className="text-center fetch-style"> Fetching Posts...</h4>;
      }else if (data) {
        //console.log("Inside renderMessage function - Post.jsx. About to call PostMessage");
        return <PostMessage data={data}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">WORDPRESS POSTS</h1>
        <PostForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Post;
