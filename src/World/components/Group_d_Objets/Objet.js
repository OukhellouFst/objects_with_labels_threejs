import { BoxBufferGeometry,CylinderBufferGeometry, Mesh , MeshBasicMaterial, MathUtils } from '../../../../node_modules/three/build/three.module.js';
//import { makeTextSprite } from '../Texts/create_text.js';
class Objet {
    constructor(id,vitesse,type) {
        let geometry;
        let material;

        if(type === 'car'){
            geometry = new CylinderBufferGeometry(0.2,0.2,1,8);
            material = new MeshBasicMaterial({color: 'Crimson'});
        } else {
            geometry = new BoxBufferGeometry(0.5,1,0.5);
            material = new MeshBasicMaterial({color: 'blue'});
        } 
        this.objet = new Mesh(geometry,material);
        this.objet.rotation.x += MathUtils.degToRad(90);

    }
    coordonnees(delta,id,x,y,z) {
        this.objet.position.set(x,y,1/2);
    }
}
//makeTextSprite('hello');

export {  Objet };