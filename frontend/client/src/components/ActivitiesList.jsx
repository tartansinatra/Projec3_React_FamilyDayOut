var React = require('react');
var Activity = require('./Activity.jsx');
// var AgeSelect = require('./AgeSelect.jsx');

var ActivitiesList = React.createClass({
  render: function(){
    console.log('props on list', this.props.activities)

    var activityNodes = this.props.activities.map(function(activity){
      return(
          <Activity title={activity.title}> </Activity>
      );
    });


    return(
      <div className="activityList">
      <h2> Activities List </h2>
          {activityNodes}      
      </div>
    );  

    
  }
});

module.exports = ActivitiesList;
