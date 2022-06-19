import { AxesHelper } from '../../../../node_modules/three/build/three.module.js';


function create_axes() {
    const axes = new AxesHelper(10);
    axes.setColors(0xff0000,0x00ff00,0x0000ff);
    return axes;
}

export { create_axes } ;