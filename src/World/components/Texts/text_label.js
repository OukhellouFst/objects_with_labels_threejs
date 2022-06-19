import { Projector } from '../../../../node_modules/three/examples/jsm/renderers/Projector.js';
// renderer , THREE.Projector
let renderer ;
function init_renderer(x){
    renderer= x;
}
  var LabelPlugin = {
    labels: [],
    init: function() {},
    add: function(l) {this.labels.push(l);},
    render: function() {
      for (var i=0; i<this.labels.length; i++) {
        var args = Array.prototype.slice.call(arguments);
        this.labels[i].render.apply(this.labels[i], args);
      } 
    }
  };
  renderer.addPostPlugin(LabelPlugin);


  function Label(object, content) {
    this.object = object;
    this.content = content;

    this.el = this.buildElement();
    LabelPlugin.add(this);
  }

  Label.prototype.buildElement = function() {
    var el = document.createElement('div');
    el.textContent = this.content;
    el.style.backgroundColor = 'white';
    el.style.position = 'absolute';
    el.style.padding = '1px 4px';
    el.style.borderRadius = '2px';
    el.style.maxWidth = (window.innerWidth * 0.25) + 'px';
    el.style.maxHeight = (window.innerHeight * 0.25) + 'px';
    el.style.overflowY = 'auto';
    document.body.appendChild(el);
    return el;
  };

  Label.prototype.render = function(scene, cam) {
    var p3d = this.object.position.clone();
    p3d.y = p3d.y + this.object.boundRadius;    

    var projector = new Projector(),
        pos = projector.projectVector(p3d, cam),
        width = window.innerWidth,
        height = window.innerHeight,
        w = this.el.offsetWidth,
        h = this.el.offsetHeight;
    this.el.style.top = '' + (height/2 - height/2 * pos.y - 1.5*h) + 'px';
    this.el.style.left = '' + (width/2 * pos.x + width/2 - w/2) + 'px';
  };
  
  Label.prototype.setContent = function(content) {
    this.content = content;
    this.el.textContent = this.content;
  };
  
  Label.prototype.remove = function() {
    this.el.style.display = 'none';
    LabelPlugin.remove(this);
  };
  
  renderer.addPostPlugin(LabelPlugin);


export { Label , init_renderer };