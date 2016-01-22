var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('./dropdown');

var options = {
  title: 'Pick a destination',
  items: [
    'Venice',
    'Costarica',
    'Bahamas',
    'Hawaii'
  ]
};


var element = React.createElement(Dropdown, options);
ReactDOM.render(element,document.querySelector('.container'));
