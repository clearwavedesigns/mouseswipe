/*
 MouseSwipe v0.3.0
 (c) 2015 Depth Development. http://depthdev.com
 License: MIT
*/

function MouseSwipe(o) {
  
  // Local variables
  var start = { ms: 0, x: 0, y: 0 };
  var end = { ms: 0, x: 0, y: 0 };
  var swipe = o.swipe;
  var mousePressed = false;

  // Internal Methods
  var mouseEnter = function(e) {
    
  }; // mouseEnter
  
  var mouseDown = function(e) {
    start.ms = e.timeStamp;
    start.x = e.clientX - o.area.offsetLeft;
    start.x = start.x < 0 ? 0 : start.x > o.area.offsetWidth ? o.area.offsetWidth : start.x;
    start.y = event.clientY - o.area.offsetTop;
    start.y = start.y < 0 ? 0 : start.y > o.area.offsetHeight ? o.area.offsetHeight : start.y;
  }; // mouseDown
  
  var mouseUp = function(e) {
    end.ms = e.timeStamp;
    end.x = e.clientX - o.area.offsetLeft;
    end.x = end.x < 0 ? 0 : end.x > o.area.offsetWidth ? o.area.offsetWidth : end.x;
    end.y = event.clientY - o.area.offsetTop;
    end.y = end.y < 0 ? 0 : end.y > o.area.offsetHeight ? o.area.offsetHeight : end.y;
    
    if (o.change) { o.change(mouseDiff()); }
    
  }; // mouseUp
  
  var mouseMove = function(e) {

    var x = event.clientX - o.area.offsetLeft;
    var y = event.clientY - o.area.offsetTop;
    
    end.ms = e.timeStamp;
    end.x = x;
    end.y = y;

    if (o.move && mousePressed) {
      o.move({
        ms: e.timeStamp - start.ms,
        x: (x < 0 ? 0 : x > o.area.offsetWidth ? o.area.offsetWidth : x) - start.x,
        y: (y < 0 ? 0 : y > o.area.offsetHeight ? o.area.offsetHeight : y) - start.y
      });
    }
    if (o.moving) {
      o.moving({
        ms: e.timeStamp,
        x: x < 0 ? 0 : x > o.area.offsetWidth ? o.area.offsetWidth : x,
        y: y < 0 ? 0 : y > o.area.offsetHeight ? o.area.offsetHeight : y
      });
    }
  }; // mouseMove
  
  var mouseSwipe = function() {
    if (swipe) {
      var diff = mouseDiff();
      var x = Math.abs(diff.x);
      var y = Math.abs(diff.y);
      return x / swipe > y ? diff.x > 0 ? 'right' : 'left' : y / swipe > x ? diff.y > 0 ? 'down' : 'up' : false;
    }
  }; // mouseSwipe
  
  var mouseDiff = function() {
    return {
      ms: end.ms - start.ms,
      x: end.x - start.x,
      y: end.y - start.y
    }
  };
  
  // Init
  (function() {
    o.area.addEventListener('mouseenter', function(e) {
      mousePressed = false;
    });
    if(o.change || o.move){
      o.area.addEventListener('mousedown', function(e) {
        mousePressed = true;
        mouseDown(e);
        if (o.down) { o.down(); }
      }, false);
      //o.area.addEventListener('touchstart', mouseDown, false);
      o.area.addEventListener('mouseup', function(e) {
        mousePressed = false;
        mouseUp(e);
        if (o.up) { o.up(); }
      }, false);
      //o.area.addEventListener('touchend', mouseUp, false);
    }
    if(o.move || o.moving){
      o.area.addEventListener('mousemove', mouseMove, false);
      //o.area.addEventListener('touchmove', mouseMove, false);
    }
  }.bind(this)());

  return {
    swipe: mouseSwipe
  }
}; // MouseSwipe
