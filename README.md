# MouseSwipe
Mouse swiping API.

<p>Weak-sauce <a href="http://codepen.io/depthdev/pen/bVmqzY" target="_blank">demo</a></p>

<h2>Use:</h2>
<pre>
// INSTANTIATE A NEW MOUSESWIPE OBJECT
<strong>var swipeInstance = new MouseSwipe({</strong>
  <strong>area:</strong> document.querySelector('#swipe-area'), <em>// Required. Area to track as an element.</em>
  <strong>change:</strong> dev.change, <em>// Optional. Function. Returns an object with ms, x, and y as the difference between the mouseup and mousedown events.</em>
  <strong>move:</strong> dev.move, <em>// Optional. Function. Returns an object with ms, x, and y as the ellapsed current datetime ms stamp, x and y coordinates since mousedown.</em>
  <strong>moving:</strong> dev.moving, <em>// Optional. Function. Returns an object with ms, x, and y as the current datetime ms stamp, x and y coordinates.</em>
  <strong>down:</strong> dev.down, <em>// Optional. Function. Fires when mouse button is pressed.</em>
  <strong>up:</strong> dev.up, <em>// Optional. Function. Fires when mouse button is released.</em>
  <strong>swipe:</strong> 3 <em>// Optional. Number. Default === 0 (no swipe). The precision of what is considered a swipe. 1 === 45 degrees, 2 === 22.5 degrees, 3 === 15 degrees, etc. Returns swipe directions as lowercase strings 'left','right','up' or 'down'.</em>
<strong>});</strong>
</pre>
