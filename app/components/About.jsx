var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">ABOUT</h1>

      <div className="post-box-shadow-none-post">
        <p>
          This is an application that pulls posts from a WordPress website and displays them all for viewing.
        </p>
        <p>
          The Following components are needed on the WordPress website being pinged.
        </p>
        <ul>
          <li> WordPress REST API V2</li>
        </ul>
    </div>

    </div>
  )
};

module.exports = About;
