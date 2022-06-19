// pay attention if we work with CSS2Renderer 
// and if we use 2d canvas html with 3d scene 
// we gonna need to change parameter of our control 
// to get the inputs from other element but container 
// we've used in the begining 
// work on this example [https://codepen.io/smtrd/pen/MZVWpN?editors=0010]
import { CSS2DRenderer, CSS2DObject } from '../../../../node_modules/three/examples/jsm/renderers/CSS2DRenderer.js';

function init(width, hieght) {
    labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(width,hieght);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    labelRenderer.domElement.style.pointerEvents = 'none';
    document.body.appendChild(labelRenderer.domElement);
}