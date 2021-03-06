var React = require('react');
var WordPress = require('wordpress-rest-api');

var PostMessage = ({data}) => {
  // {data} in arguments is equivalent to
  // setting (props) in the args, then making the following declaration:
  // var {data} = props
  //  which gives each respective var the following definition:
  // data = props.data
  // The currently present argument syntax is new with ES6
  //console.log("Inside PostMessage, about to return It is this and this temp in location");

  //JSON Data returns content with <p></p> tags. dangerouslySetInnerHTML let's React blend those
  //tags into the div, and append the text inside the actual HTML paragraph tags.
  return (
    <div className="text-center">
      <h2 className="ping-box-shadow text-center">Pinged this<a href='http://52.201.216.75'> WordPress Blog</a></h2>
      <div className="post-box-shadow">
        <h1 className="post-title"><div dangerouslySetInnerHTML={ {__html: data[0].title.rendered} }></div> </h1>
        <div className="post-contents" dangerouslySetInnerHTML={ {__html: data[0].content.rendered} }></div>
      </div>

      <div className="post-box-shadow">
        <h1 className="post-title"><div dangerouslySetInnerHTML={ {__html: data[1].title.rendered} }></div></h1>
        <div className="post-contents" dangerouslySetInnerHTML={ {__html: data[1].content.rendered} }></div>
      </div>

      <div className="post-box-shadow">
        <h1 className="post-title"><div dangerouslySetInnerHTML={ {__html: data[2].title.rendered} }></div></h1>
        <div className="post-contents" dangerouslySetInnerHTML={ {__html: data[2].content.rendered} }></div>
      </div>

    </div>
  );
}

module.exports = PostMessage;
