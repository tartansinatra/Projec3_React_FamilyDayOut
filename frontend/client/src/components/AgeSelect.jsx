var React = require('react');

var AgeSelect = React.createClass({

  getInitialState:function(){
    return({ selectedIndex: null })
  },

  handleChange:function(e){
    e.preventDefault();
    var ageGroupSelected = e.target.value
    this.setState({selectedIndex: ageGroupSelected});
    this.props.onSelectAgeGroup(ageGroupSelected);
    // var currentAge = this.props.ages.[ageSelected]
    // this.props.onSelectAge(currentAge);
  },


  render: function(){
    var ageSelectOptions = [
    {'id':1, 'value': 'toddler'},
     {'id':2, 'value':'junior'}, 
     {'id':3, 'value':'tweens'}, 
     {'id': 4, 'value':'teens'}
     ] 
    
    var options = ageSelectOptions.map(function(ageSelectOption){
      return <option value={ageSelectOption.id} key={ageSelectOption.id}> { ageSelectOption.value } </option>
    });

    // console.log()

    return(
      <div>
       <select value={this.state.selectedIndex} onChange={this.handleChange}>
          { options }
       </select>
      </div>
    )
  }
});

module.exports = AgeSelect;
