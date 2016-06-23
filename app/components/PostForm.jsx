var React = require('react');

var PostForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    console.log("Inside onFormSubmit - PostForm.jsx");

    this.props.onSearch();
  },
  render: function () {
    console.log("Inside render function for PostForm.jsx.");
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <button className="button expanded hollow">Get Wordpress Posts</button>
        </form>
      </div>
    );
  }
});

module.exports = PostForm;

//<input type="search" ref="location" placeholder="Search Weather By City"/>
