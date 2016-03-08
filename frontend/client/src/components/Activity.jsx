var React = require('react');


var Activity = React.createClass({

  // getInitialState:function()
    // return()

  render: function(){
    var activityTitle = this.props.title;
    console.log(activityTitle);
    return(
      <div>
        <ul>
          <li> {activityTitle} </li>
        </ul>
      </div>



      );
  }
});

module.exports = Activity;
