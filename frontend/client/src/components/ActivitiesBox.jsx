var React = require('react')
var ActivitiesList = require('./ActivitiesList.jsx');
var AgeSelect = require('./AgeSelect.jsx');
var TypeSelect = require('./TypeSelect.jsx');
// var ActivityFilters = require('./ActivityFilters.js');
// var BudgetSelect = require('BudgetSelect.jsx');
// var WeatherSelect = require('WeatherSelect.jsx');


var sampleActivites = require('../sample_activities.js');


var ActivitiesBox = React.createClass({

  getInitialState:function(){
    return({activities: [], currentAgeGroup:null, currentType:null})
  },

  handleAgeGroupUpdate:function(ageGroupId){
    console.log('AB wanting to change ageGroupId to', ageGroupId);
    this.setState({currentAgeGroup: parseInt(ageGroupId)});
  },

  handleTypeUpdate:function(typeId){
    console.log('AB wanted to change typeID to', typeId);
    this.setState({currentType: parseInt(typeId)});
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
        <h1> Top Level Activities Box </h1>
          <h4> Current Age Group: {this.state.currentAgeGroup}</h4>
          <h4> Current Type: {this.state.currentType}</h4>
          Select Age Group: <AgeSelect onSelectAgeGroup={this.handleAgeGroupUpdate}></AgeSelect>
          
          Type of Activity Preferred: <TypeSelect onSelectType={this.handleTypeUpdate}></TypeSelect>
          
          <ActivitiesList activities={filteredActivities}> </ActivitiesList> 
      </div>
          // <TypeSelect> </TypeSelect>
          // <BudgetSelect> </BudgetSelect>
          // <WeatherSelect> </WeatherSelect>
        

      )
  }
});

module.exports = ActivitiesBox;

