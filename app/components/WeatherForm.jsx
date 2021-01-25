var React = require("react");

var WeatherForm = React.createClass({

  onFormSubmit: function (e) {
    e.preventDefault();
    var loc = this.refs.locRef.value;
    if (loc.length > 0) {
      this.refs.locRef.value = "";
      this.props.onSearch(loc);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="locRef"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
