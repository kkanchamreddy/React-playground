var React = require('react');
var ReactDOM = require('react-dom');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData:[
    {
      title: "See Tutorial",
      number: "40",
      imageUrl : "http://reapp.io/images/react-logo.svg",
      header: "React",
      description: "React is a new framework.React is a new framework"
    },
    {
      title: "See Tutorial",
      number: "41",
      imageUrl : "https://raw.githubusercontent.com/marko-js/branding/master/marko-logo-small.png",
      header: "Marko",
      description: "Marko is a new light weight framework"
    },
]
};


var element = React.createElement(ThumbnailList, options);
ReactDOM.render(element,document.querySelector('.container'));
