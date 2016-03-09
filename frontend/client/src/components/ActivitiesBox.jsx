var React = require('react')
var ActivitiesList = require('./ActivitiesList.jsx');
var AgeSelect = require('./AgeSelect.jsx');
// var BudgetSelect = require('BudgetSelect.jsx');
// var WeatherSelect = require('WeatherSelect.jsx');
// var TypeSelect = require('TypeSelect.jsx');


var sampleActivites = require('../sample_activities.js');


var ActivitiesBox = React.createClass({

  getInitialState:function(){
    return({activities: [], currentAgeGroup:null})
  },

  handleAgeGroupUpdate:function(ageGroupId){
    console.log('AB wanting to change ageGroupId to', ageGroupId);
    this.setState({currentAgeGroup: ageGroupId});
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


  // filteredActivities:function(ageGroupId){
  //   if(!ageGroupId) return this.chosenActivities
  //   var filteredActivities = [];
  //   for (var activity of this.chosenActivities){
  //     if (ageGroupId === activity.ageGroupId)
  //       filteredActivities.push(activity)
  //   } 
  //     return filteredActivities;
  // },


  render: function(){
  var chosenActivities = this.state.activities


    return(
      <div>
        <h1> Top Level Activities Box </h1>
          <h4> Current Age Group: {this.state.currentAgeGroup}</h4>
          <AgeSelect onSelectAgeGroup = {this.handleAgeGroupUpdate}></AgeSelect>
          <ActivitiesList activities={chosenActivities}> </ActivitiesList> 
      </div>
        

      )
  }
});

module.exports = ActivitiesBox;

