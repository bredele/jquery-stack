
# jquery-stack

  jQuery plugin to stack your dom nodes
	

## Usage

First, include the jQuery and the stack plugin:

```html
<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="jquery.stack.js"></script>
```

Then create your stack as following (a stack can be any content):


```html
<div class="stack">
	<div data-stack="child1">child1</div>
	<div data-stack="child2">child2</div>
	<div data-stack="child3">child3</div>
</div>
```

and intialize your plugin:

```js
var stack = $('.stack').stack({
	default:'child1'
});
```

## API

### add(name, dom)

  Identify a jquery element by name and push it into the stack

```js
stack.add('child4', $('.child4'));
```

### show(name)

  Display a stacked element into the `parent` element.

```js
stack.show('child3');
```

## Events

### show

```js
$('.stack').trigger('show', 'child2');
```

## Options

### Namespace

By default, the plugin look for nodes containing the `stack` data-attribute . You can set this namespace with the following option:

```js
var stack = $('.stack').stack({
	namespace:'obama'
});
```

### Default visible

When you create a stack, every child nodes are stacked into a document fragment and are not visible on the screen. However, you can choose to display one by default:

```js
var stack = $('.stack').stack({
	default:'child2'
});
```


## Component

You can install a component version with [component(1)](http://component.io):

  $ component install bredele/stack

## License

  MIT
