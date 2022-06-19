import { Group } from "../../../node_modules/three/build/three.module.js";
import {  Objet } from './Group_d_Objets/Objet.js';
import { createGround } from './Group_d_Objets/ground.js';
//import { Label } from '../components/Texts/text_label.js';
import { create_grid } from './helpers/create_grid.js';
import { controleGrid } from '../components/gui/control_labels.js';

function createMeshGroup(camera,renderer,scene) {
    const group = new Group();
    const ground = createGround();
    // cylinder 
    const cylinder = new Objet(1,3,'car');
    // cube 
    const cube = new Objet(2,5,'k');

    // labels 
    // new Label(cube, "Earth");
    // var m_label = new Label(cylinder, "Mars");
    // setTimeout(function() {m_label.remove();}, 5000);

    // grid 
    const grid =create_grid(scene);
    ground.add(grid);
    controleGrid(grid);


    group.add(ground);
    ground.add(cylinder.objet,cube.objet);


    group.tick = (delta) => {
        cylinder.coordonnees(delta,1,0,0,1);
        cube.coordonnees(delta,3,3,4,1);
    };
    return group;
}






export {createMeshGroup};