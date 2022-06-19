import { GridHelper} from '../../../../node_modules/three/src/helpers/GridHelper.js';
import {MathUtils} from '../../../../node_modules/three/build/three.module.js';

function create_grid(scene) {
    const size = 1000;
    const divisions = 1000;
    
    const gridHelper = new GridHelper( size, divisions );
    gridHelper.rotation.x += MathUtils.degToRad(90);
    scene.add( gridHelper );

    return gridHelper;
}

export {create_grid};