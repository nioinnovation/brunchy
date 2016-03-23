---
title: nio.js block/modular streamer ideas
author:  Matt Dodge
posted: 20160322
summary:
  General ideas and a stab at a high-level syntax for streaming data to frontend blocks.
_options:
  layout: app/layouts/blog.static.hbs
---

Here is a high level approach to what I was thinking for what our modular streamers would look like inside of nio.js.

## Concepts

The idea of these modules is that they act on streaming data, much like a block does in n.io as a backend. A block to a frontend might be a visualization on the DOM, a JavaScript function that enriches or filters the stream, or a function that creates a stream of data somehow.

### Reusability 

Blocks by definition are meant to be as flexible or re-usable as the block creator wishes. This means support for reusability must be built-in and simple to understand but not required. A one-time use block is perfectly acceptable and sometimes even encouraged in the right situation. 

One of the ways we allow blocks to be reused is to have them support some runtime configuration to slightly alter their behavior. A filter block, for example, has the generic purpose of filtering signals into true or false outputs, but allows the service builder to decide what criteria to use in that filter. 

Our frontend blocks should be similar. Certain custom visualizations like the mobile demo are unlikely to be reused given how specific the visualization is. However, a streaming line chart is likely to be reused and should probably have some configuration options to support this. Things like line colors, axis labels, and data pruning are examples of possible configuration options.


## Names

I've already referred to them as about 3 different things in this post

 - Blocks
   - consistent with n.io as a backend
 - Element
   - is it always tied to an element though?
 - Module
   - already means something in node
 - Modular Streamers
   - terrible, really, but adapts from streamers

## Syntax

### General Cases

In general, nio.js should allow for the streaming or piping of data to different blocks. If we're staying consistent with the way that n.io as a backend does it, the blocks are configured with their options before any data is actually sent to the blocks.

I could see either of the following methods of streaming to a block being equivalent:

```js
nio.stream(blockFunction, blockConfiguration)
```

```js
var myBlock = blockFunction();
myBlock.configure(blockConfiguration);
nio.stream(myBlock)
```

### Example

From a socket, through a filter, to a chart

```js
var SocketIO = require('niojs-socketio'),
	LineChart = require('niojs-line-chart');

nio.generator(SocketIO, {
	host: 'http://mysocket.server.com',
	room: 'myroom'
}).stream(nio.filter(function(signal) {
	return signal.myVal > 0;
})).stream(LineChart, {
	el: '#myChart',
	xAxis: 'Time',
	yAxis: 'My Value',
	yValue: 'myVal'
})
```

The `generator` call is there because we know that block is going to create the stream. Nothing will be streamed into that block. This concecpt (GeneratorBlock) exists in the n.io backend framework as well.

The `nio.filter` call is a shortcut, similar to `nio.pass` and `nio.func` that we currently have, to use quick functions in-stream, rather than having to create a new block.

The `el` option in LineChart could be a "standard" option for DOM-based blocks. Similar to [how Backbone Views do it](http://backbonejs.org/#View-el). There could be other standard options too, maybe class names, visibility flags, templates, etc.

### Stream Pausing/Resuming

Similar to how nio.js supports it currently, streams should be able to be split, paused, and resumed.

```js
var stream = nio.generator(SocketIO, socketOpts);

stream.stream(LineChart, chartOpts);

// Alternate the stream from paused to active every 5 seconds
setInterval(function() {
	if (stream.active) {
		stream.pause();
	} else {
		stream.resume();
	}
}, 5000);
```
