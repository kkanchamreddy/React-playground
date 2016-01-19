(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/kkanchamreddy/Documents/gitRepos/React-playground/thumbnail-gulp/src/app.jsx":[function(require,module,exports){
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

},{}]},{},["/Users/kkanchamreddy/Documents/gitRepos/React-playground/thumbnail-gulp/src/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2thbmNoYW1yZWRkeS9Eb2N1bWVudHMvZ2l0UmVwb3MvUmVhY3QtcGxheWdyb3VuZC90aHVtYm5haWwtZ3VscC9zcmMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksT0FBTyxHQUFHO0VBQ1osYUFBYSxDQUFDO0lBQ1o7TUFDRSxLQUFLLEVBQUUsY0FBYztNQUNyQixNQUFNLEVBQUUsSUFBSTtNQUNaLFFBQVEsR0FBRyx1Q0FBdUM7TUFDbEQsTUFBTSxFQUFFLE9BQU87TUFDZixXQUFXLEVBQUUsbURBQW1EO0tBQ2pFO0lBQ0Q7TUFDRSxLQUFLLEVBQUUsY0FBYztNQUNyQixNQUFNLEVBQUUsSUFBSTtNQUNaLFFBQVEsR0FBRyxpRkFBaUY7TUFDNUYsTUFBTSxFQUFFLE9BQU87TUFDZixXQUFXLEVBQUUsdUNBQXVDO0tBQ3JEO0NBQ0o7Q0FDQTtBQUNELElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztBQUUxRCxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG9wdGlvbnMgPSB7XG4gIHRodW1ibmFpbERhdGE6W1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIlNlZSBUdXRvcmlhbFwiLFxuICAgICAgbnVtYmVyOiBcIjQwXCIsXG4gICAgICBpbWFnZVVybCA6IFwiaHR0cDovL3JlYXBwLmlvL2ltYWdlcy9yZWFjdC1sb2dvLnN2Z1wiLFxuICAgICAgaGVhZGVyOiBcIlJlYWN0XCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJSZWFjdCBpcyBhIG5ldyBmcmFtZXdvcmsuUmVhY3QgaXMgYSBuZXcgZnJhbWV3b3JrXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlNlZSBUdXRvcmlhbFwiLFxuICAgICAgbnVtYmVyOiBcIjQxXCIsXG4gICAgICBpbWFnZVVybCA6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL21hcmtvLWpzL2JyYW5kaW5nL21hc3Rlci9tYXJrby1sb2dvLXNtYWxsLnBuZ1wiLFxuICAgICAgaGVhZGVyOiBcIk1hcmtvXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJNYXJrbyBpcyBhIG5ldyBsaWdodCB3ZWlnaHQgZnJhbWV3b3JrXCJcbiAgICB9LFxuXVxufVxudmFyIGVsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFRodW1ibmFpbExpc3QsIG9wdGlvbnMpO1xuXG5SZWFjdERPTS5yZW5kZXIoZWxlbWVudCxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykpO1xuIl19
