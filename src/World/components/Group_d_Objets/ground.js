import { PlaneGeometry,MeshBasicMaterial, Mesh, MathUtils } from '../../../../node_modules/three/build/three.module.js';
import { create_texture } from '../Texture/create_gound_texture.js';

function createGround () {
    const geometryGround = new PlaneGeometry(20,10);
    const texture = create_texture(20,10);
    const materialGround = new MeshBasicMaterial({
        color: 0xffffff,
        map: texture, 
    });
    materialGround.transparent = true;
    materialGround.opacity= 0.5;
    const ground = new Mesh(geometryGround,materialGround);
    ground.rotation.x -= MathUtils.degToRad(90);
    
    return ground;
}


export { createGround } ;