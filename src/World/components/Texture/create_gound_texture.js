/**
 * @description 
 * i want to map ground texture to the ground plane , 
 * and this texture will be like this : 
 * for each cellule of textue will match one 1 units the ground 
 */
import { RepeatWrapping,NearestFilter} from '../../../../node_modules/three/build/three.module.js';
import { TextureLoader } from '../../../../node_modules/three/src/loaders/TextureLoader.js';
function create_texture(groundWidth,groundHeight) {
    const loader = new TextureLoader();
    const texture = loader.load('http://stemkoski.github.io/Three.js/images/checkerboard.jpg');
    //const texture = loader.load('../../assets/checkerboard.jpg');
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.magFilter = NearestFilter;
    const reaptX = groundWidth/2;
    const reaptY = groundHeight/2;
    texture.repeat.set(reaptX,reaptY);
    return texture;
}
create_texture();

export { create_texture };