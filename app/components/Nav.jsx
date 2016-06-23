var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('Not yet working fully');
  },
  render: function (){
    return(
      <div className="top-bar">

        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              <h5>WordPress Post Pulling Application</h5>
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Post</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/search" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Search Feature</Link>
            </li>
          </ul>
        </div>

      </div>

    );
  }
});

module.exports = Nav;

<div>
<h2>Nav Component</h2>
</div>
