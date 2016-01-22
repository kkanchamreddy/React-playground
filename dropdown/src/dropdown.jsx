var React = require('react');
var Button  = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function(){
    console.log('Clciked');
  },

  getInitialState: function(){
    return {open:false};
  },

  render: function(){
    var list = this.props.items.map(function(item){
      return <ListItem item= {item} />
    });

    return <div className="dropdown">
      <Button clickHandler ={this.handleClick}
              className="btn-default"
              title ={this.props.title}
              subTitleClassName="caret"/>

      <ul className={"dropdown-menu " + (this.state.open ? "show": "false")}>
        {list}
      </ul>

    </div>
  }
})
