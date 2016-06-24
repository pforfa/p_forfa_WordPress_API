var React = require('react');

var PostForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    //console.log("Inside onFormSubmit - PostForm.jsx");

    this.props.onSearch();
  },
  render: function () {
    //console.log("Inside render function for PostForm.jsx.");
    return (
      <div>
        <form className="marg-button" onSubmit={this.onFormSubmit}>
          <button className="button large">GET WORDPRESS POSTS</button>
        </form>
      </div>
    );
  }
});

module.exports = PostForm;
