import { OrbitControls } from '../../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { MathUtils } from '../../../node_modules/three/build/three.module.js';
function createControls(camera,canvas) {
    const controls = new OrbitControls(camera,canvas);
    controls.maxPolarAngle = MathUtils.degToRad(60);
    
    // daming and auto rotation require 
    // the controls to be updated each frame 
    controls.enableDamping = true;
    controls.tick = () => controls.update();
    return controls;
}


export { createControls };