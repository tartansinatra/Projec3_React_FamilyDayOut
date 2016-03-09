var ActivityFilters = function(){
  this.activities = [];
}

ActivityFilters.prototype = {

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
}

module.exports = ActivityFilters;


 
    // var ageGroupId = this.state.currentAgeGroup;
    // if(!ageGroupId) {
    //   filteredActivities = this.state.activities;
    // } else {
    //   for (var activity of this.state.activities){
    //     for (var ageGroup of activity.ageGroup) {
    //       if (ageGroupId === ageGroup.id){
    //         filteredActivities.push(activity)
    //       }
    //     }
    //   } 
    // }