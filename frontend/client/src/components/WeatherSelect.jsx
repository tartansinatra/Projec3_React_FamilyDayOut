var React = require('react');


var WeatherSelect = React.createClass({
  
  getInitialState:function(){
    return({ selectedIndex: null })
  },

  handleChange:function(e){
    e.preventDefault();
    var weatherSelected = e.target.value
    this.setState({selectedIndex: weatherSelected});
    this.props.onSelectWeather(weatherSelected);
  },

  render: function(){
  var weatherSelectOptions = [
  {"id": 1, "value":"fair"},
  {"id": 2, "value":"sunny"},
  {"id": 3, "value":"breezy"},
  {"id": 4, "value":"dry"},
  {"id": 5, "value":"rain"}
    ] 

    var options = weatherSelectOptions.map(function(weatherSelectOption){
     return <option value={weatherSelectOption.id} key={weatherSelectOption.id}>{weatherSelectOption.value }</option>
   });

    return(
     <div>
       <select value={this.state.selectedIndex} onChange={this.handleChange}>
       { options }
       </select>
     </div>
     )
  }
})

module.exports = WeatherSelect;