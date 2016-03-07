var React = require('react')
var ActivitiesList = require('./ActivitiesList.jsx');
// var ActivityBox = require('activitybox.jsx');
// var AgeSelect = require('AgeSelect.jsx');
// var BudgetSelect = require('BudgetSelect.jsx');
// var WeatherSelect = require('WeatherSelect.jsx');
// var ActivityTypeSelect = require('ActivityTypeSelect.jsx');


var sampleActivites = require('../sample_activities.js');

var ActivitiesBox = React.createClass({

  getInitialState:function(){
    return({activities: []})
  },

  componentDidMount: function(){
    console.log('comp mounted')
    console.log('sampleActivites', sampleActivites);
    this.setState({activities: sampleActivites})
    // var url = "this.props.url"
    // var request = new XMLHttpRequest();
    // request.open("GET", url);
    // request.onload = function(){
    //   if(request.status === 200) {
    //     var activities = JSON.parse(request.responseText);
    //     console.log("got data", data);
    //     this.setState({activities: data})
    //   }
    // }.bind(this)
    // request.send(null);
  },


  render: function(){
    return(
      <div>
      
        <h1> Top Level Activities Box </h1>
        <ActivitiesList activities={this.state.activities}> </ActivitiesList>

        
      </div>
      )
  }
});

module.exports = ActivitiesBox;

