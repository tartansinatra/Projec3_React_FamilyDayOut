var React = require('react')
var ActivitiesList = require('./ActivitiesList.jsx');
var AgeSelect = require('./AgeSelect.jsx');
var TypeSelect = require('./TypeSelect.jsx');
var BudgetSelect = require('./BudgetSelect.jsx');
var WeatherSelect = require('./WeatherSelect.jsx');
// var ActivityFilters = require('./ActivityFilters.js');


var sampleActivites = require('../sample_activities.js');


var ActivitiesBox = React.createClass({

  getInitialState:function(){
    return({activities: [], currentAgeGroup:null, currentType:null, currentBudget:null})
  },

  handleAgeGroupUpdate:function(ageGroupId){
    console.log('AB wanting to change ageGroupId to', ageGroupId);
    this.setState({currentAgeGroup: parseInt(ageGroupId)});
  },

  handleTypeUpdate:function(typeId){
    console.log('AB wanted to change typeID to', typeId);
    this.setState({currentType: parseInt(typeId)});
  },

  handleBudgetUpdate:function(budgetId){
    console.log('AB wanted to change budgetID to', budgetId);
    this.setState({currentBudget: parseInt(budgetId)});
  },

  handleWeatherUpdate:function(weatherId){
    console.log('AB wanted to change weatherID to', weatherId);
    this.setState({currentWeather: parseInt(weatherId)});
  },

  componentDidMount: function(){
    console.log('comp mounted')
    console.log('sampleActivites', sampleActivites);
    this.setState({activities: sampleActivites});
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
  // var chosenActivities = this.state.activities

    var filteredActivities = [];

    var ageGroupId = this.state.currentAgeGroup;
    if(!ageGroupId) {
      filteredActivities = this.state.activities;
    } else {
      for (var activity of this.state.activities){
          for (var ageGroup of activity.ageGroup) {
            if (ageGroupId === ageGroup.id){
              filteredActivities.push(activity)
            }
          }
      } 
    }



    return(
      <div>
        <h1> Family Pick n Mix! </h1>
          <h4>Current Age Group: {this.state.currentAgeGroup}</h4>
          <h4>Current Type: {this.state.currentType}</h4>
          <h4>Current Budget: {this.state.currentBudget}</h4>
          <h4>Current Weather: {this.state.currentWeather}</h4>

          <h3>
            Select Age Group: <AgeSelect onSelectAgeGroup={this.handleAgeGroupUpdate}></AgeSelect>
            Type of Activity Preferred: <TypeSelect onSelectType={this.handleTypeUpdate}></TypeSelect>
            Budget Option: <BudgetSelect onSelectBudget={this.handleBudgetUpdate}></BudgetSelect>
            Weather Conditions: <WeatherSelect onSelectWeather={this.handleWeatherUpdate}></WeatherSelect>
          </h3>
          <ActivitiesList activities={filteredActivities}> </ActivitiesList> 
      </div>
      )
  }
});

module.exports = ActivitiesBox;

