var React = require('react');
var ReactDOM = require('react-dom');
var ActivitiesBox = require('./components/ActivitiesBox.jsx')

window.onload = function(){
  console.log("webpack app started");
  ReactDOM.render(
    <ActivitiesBox></ActivitiesBox>,

    document.getElementById('app')
    );

};