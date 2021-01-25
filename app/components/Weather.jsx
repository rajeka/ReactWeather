var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
//def9a4d2727da3acdc6fad12fdf78052= default
//openweathermap.org; appid=1cfa6876e527ba5a5ec8dcd30cdd39d7
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
      // location: 'Miami',
      // temp: 88
    }
  },
  handleSearch: function (location) {
    var that = this;
    this.setState({ isLoading: true});

    OpenWeatherMap.getTemp(location).then(function (temp) {
      //debugger:
      that.setState({
        location: location,
        temp: temp,
        isLoading: false

      });
    }, function (errorMessage) {
        that.setState({isLoading: false});
        alert(errorMessage);
    });
    // this.setState({
    //   location: location,
    //   temp: 23
    // });
  },
  render: function () {
    //destructuring
    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
          return <WeatherMessage temp={temp} location={location}/>
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
