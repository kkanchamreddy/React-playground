var React = require('React');

module.exports = React.createClass({
  render: function(){
    return <li> <a> {this.props.item}</a></li>
  }
});
