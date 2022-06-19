import { PerspectiveCamera } from "../../../node_modules/three/build/three.module.js";

function createCamera() {
    const camera = new PerspectiveCamera (
        35, // fov = Field of view 
        2, // aspect ratio (dummy value)
        0.1, // near clipping plane 
        80, // far clipping plane 
    );

    // move the camera back so we can view the scene 
    camera.position.set(0,0,30);

    return camera;
}

export {createCamera} ;