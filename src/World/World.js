import { createCamera } from './components/camera.js';
import {  createMeshGroup } from './components/meshGroup.js';
import { createScene } from './components/scene.js';
//import { createLights } from './components/lights.js';
import { create_axes } from './components/helpers/create_axes.js';
//import { init_renderer } from './components/Texts/text_label.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

//gui controle 
import { controleCamera } from './components/gui/control_labels.js';



// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    controleCamera(camera);

    scene = createScene();
    renderer = createRenderer();
    console.log(renderer);
    //init_renderer(renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera,renderer.domElement);
    const meshGroup = createMeshGroup(camera,renderer,scene);
    loop = new Loop(camera,scene,renderer);
    loop.updatables.push(controls,meshGroup);

    const axesHelper = create_axes();
    scene.add(meshGroup,axesHelper);

    const resizer = new Resizer(container, camera, renderer);
}

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }
  stop() {
    loop.stop();
  }
}

export { World ,renderer};
