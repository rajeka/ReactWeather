var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h2>Nav Component</h2>
//         <ul>
//           <li><Link to="/"> React Weather</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/examples">Examples</Link></li>
//           </ul>
//        </div>
//     );
//   }
// });

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('Not yet wired up!');
  },
  render: function () {
      return (
        <div className="top-bar">

          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Weather App</li>
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
              </li>
              <li>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
              </li>
              <li>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
              </li>
            </ul>
          </div>

          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search" placeholder="search weather"/>
                </li>
                <li>
                  <input type="submit" className="button" value="Get Weather"/>
                </li>
              </ul>
            </form>

          </div>
         </div>
      );
    }
});
module.exports = Nav;
