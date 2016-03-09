var React = require('react');


var TypeSelect = React.createClass({

  getInitialState: function(){
    return {selectedIndex: null};
  },

  handleChange:function(e){
    e.preventDefault();
    var typeSelected = e.target.value
    this.setState({selectedIndex: typeSelected});
    this.props.onSelectType(typeSelected);
  },


  render: function(){
    var typeSelectOptions = [
    {'id':1, 'value':'active'},
    {'id':2, 'value':'creative'},
    {'id':3, 'value':'learning'},
    {'id':4, 'value':'tour'}
    ]

    var options = typeSelectOptions.map(function(typeSelectOption){
      return <option value={typeSelectOption.id} key={typeSelectOption.id}> {typeSelectOption.value} </option>
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

module.exports = TypeSelect;