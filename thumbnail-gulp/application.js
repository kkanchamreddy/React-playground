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
}
var element = React.createElement(ThumbnailList, options);

ReactDOM.render(element,document.querySelector('.container'));

var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
              this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
          )
  }
});

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps){
        return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null, 
            list
           )
  }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function(){
    return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
              React.createElement("div", {className: "thumbnail"}, 
                React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
                React.createElement("div", {className: "caption"}, 
                  React.createElement("h3", null, this.props.header), 
                  React.createElement("p", null, this.props.description), 
                  React.createElement("p", null, 
                    React.createElement(Badge, {title: this.props.title, number: this.props.number})
                  )
                )
            )
          )
  }
});
