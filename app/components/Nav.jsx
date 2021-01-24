var React = require('react');
var {Link} = require('react-router');

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

var Nav = () => {
  return (
    <div>
      <h2>Nav Component</h2>
      <ul>
        <li><Link to="/"> React Weather</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/examples">Examples</Link></li>
        </ul>
     </div>
  );
}
module.exports = Nav;
