import { GUI } from '../../../../node_modules/three/examples/jsm/libs/lil-gui.module.min.js';

const gui = new GUI();
// const gui = new dat.GUI({ autoPlace: false });

// var customContainer = document.getElementById('scene-container');
// customContainer.appendChild(gui.domElement);

function controleGrid (grid) {
    const gridFolder = gui.addFolder("Grid");
    gridFolder.add(grid.rotation,"x",0,Math.PI*2);
    gridFolder.add(grid.rotation,"y",0,Math.PI*2);
    gridFolder.add(grid.rotation,"z",0,Math.PI*2);
    gridFolder.close();
}

function controleCamera (camera) {
    const gridFolder = gui.addFolder("Camera");
    gridFolder.add(camera.position, "z",0,20);
}

function controleLabels () {

}

export {controleGrid,controleCamera};

