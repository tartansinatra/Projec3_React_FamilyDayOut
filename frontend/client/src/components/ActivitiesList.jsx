var React = require('react');

var ActivitiesList = React.createClass({
  render: function(){
    console.log('props on list', this.props.activities)

    var fakeActivies = [<li>Park</li>, <li>Museum</li>];
    return(
    <div>
      <h2> Activities List </h2>
      <ul> { fakeActivies } </ul>
    </div>

    )
  }
});

module.exports = ActivitiesList;
