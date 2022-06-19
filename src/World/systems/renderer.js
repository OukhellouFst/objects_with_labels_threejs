import { WebGLRenderer } from "../../../node_modules/three/build/three.module.js";

function createRenderer() {
    const renderer = new WebGLRenderer({antialias: true});

    // turn on the physically correct lighting model (how light fades from source)
    renderer.physicallyCorrectLights = true;
    return renderer;
}

export {createRenderer};