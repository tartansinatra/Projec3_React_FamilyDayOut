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
    return({activities: [], currentAgeGroup:null, currentType:null, currentBudget:null, currentWeather:null})
  },

  handleAgeGroupUpdate:function(ageGroupId){
    console.log('Change ageGroupId to', ageGroupId);
    this.setState({currentAgeGroup: parseInt(ageGroupId)});
  },

  handleTypeUpdate:function(typeId){
    console.log('Change typeID to', typeId);
    this.setState({currentType: parseInt(typeId)});
  },

  handleBudgetUpdate:function(budgetId){
    console.log('Change budgetID to', budgetId);
    this.setState({currentBudget: parseInt(budgetId)});
  },

  handleWeatherUpdate:function(weatherId){
    console.log('Change weatherID to', weatherId);
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
        <h1> Edinburgh Family Day Out </h1>
          <p>Current Age Group: {this.state.currentAgeGroup}</p>
          Current Type: {this.state.currentType}  
          Current Budget: {this.state.currentBudget}  
          Current Weather: {this.state.currentWeather}  

          <h3>
            1. Select Age Group: <AgeSelect onSelectAgeGroup={this.handleAgeGroupUpdate}></AgeSelect>
            2. Type of Activity Preferred: <TypeSelect onSelectType={this.handleTypeUpdate}></TypeSelect>
            3. Budget Option: <BudgetSelect onSelectBudget={this.handleBudgetUpdate}></BudgetSelect>
            4. Weather Outlook: <WeatherSelect onSelectWeather={this.handleWeatherUpdate}></WeatherSelect>
          </h3>
          <ActivitiesList activities={filteredActivities}> </ActivitiesList> 
      </div>
      )
  }
});

module.exports = ActivitiesBox;

