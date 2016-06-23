var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>

      <p>
        This is an application that pulls posts from a WordPress website and displays them all for viewing.
      </p>
      <p>The page will soon receive a style overhaul.</p>
      <p>
        The Following are components are needed on the WordPress website being pinged.
      </p>
      <ul>
        <li> WordPress REST API V2</li>
      </ul>

    </div>
  )
};

module.exports = About;
