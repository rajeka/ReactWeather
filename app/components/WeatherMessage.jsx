var React = require('react');

// var WeatherMessage = React.createClass({
//  render: function () {
//    var {temp, location} = this.props;
//   // var tem = "90F"
//    return (
//      <div>
//         <p>City temprature is {temp} in {location}</p>
//      </div>
//    );
//  }
// });

// var WeatherMessage = (props) => {
 var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props;
 // var tem = "90F"
  return (
    <div>
       <h3 className="text-center">City temprature is {temp} in {location}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
