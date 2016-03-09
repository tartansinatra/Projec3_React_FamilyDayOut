var React = require('react');

var BudgetSelect = React.createClass({
  
  getInitialState:function(){
    return({ selectedIndex: null })
  },

  handleChange:function(e){
    e.preventDefault();
    var budgetSelected = e.target.value
    this.setState({selectedIndex: budgetSelected});
    this.props.onSelectBudget(budgetSelected);
  },




  render: function(){
    var budgetSelectOptions = [
    {'id':1, 'value':'FREE'},
    {'id':2, 'value':'under £10'}, 
    {'id':3, 'value':'over £10'}
    ]

    var options = budgetSelectOptions.map(function(budgetSelectOption){
      return <option value={budgetSelectOption.id} key={budgetSelectOption.id}> { budgetSelectOption.value } </option>
    });



    return(
      <div>
       <select value={this.state.selectedIndex} onChange={this.handleChange}>
          { options }
       </select>
      </div>
    )
  }
})

module.exports = BudgetSelect;