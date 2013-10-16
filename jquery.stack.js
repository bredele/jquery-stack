(function($) {

  // Plugin definition.
  $.fn.stack = function(options) {
    var settings = $.extend({
      namespace: "stack"
    }, options );

    var stack = new Stack(this);
    //add children in stack
    this.find('[data-' + settings.namespace + ']')
        .each(function(index, node){
          var child = $(node);
          stack.add(child.data(settings.namespace), child);
        });

    if(options && options.default) stack.show(options.default);

    //listen events
    this.on('show', function(event, name){
      stack.show(name);
    });

    return stack;
  };


  /**
   * Initialize a new Stack
   *
   * @param {DomElement} parent the DOM element to stack
   * @api private
   */

  function Stack(parent) {
    this.$parent = parent;
    this.fragment = document.createDocumentFragment();
    this.directory = [];
    this.current = null;
  }


  /**
   * Add dom in stack.
   *
   * @param {String} [name] dom name
   * @param {DomElement} [el] dom element
   * @api private
   */

  Stack.prototype.add = function(name, dom) {
    this.directory.push(name);
    this.fragment.appendChild(dom[0]);
    return this;
  };


  /**
   * Set visible element from stack.
   *
   * @param {String} [name] dom name
   * @api private
   */

  Stack.prototype.show = function( name ) {
    var index = this.directory.indexOf(name);
    if(index > -1) {
      var $dom = $(this.fragment.childNodes[index]);
      this.$parent.append($dom);
      this.directory.splice(index, 1);

      if(this.current) {
        this.add(this.current[0], this.current[1]);
      }

      this.current = [name, $dom];
    }
    return this;
  };


})(jQuery);