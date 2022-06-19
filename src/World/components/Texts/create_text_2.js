import { CSS2DObject } from '../../../../node_modules/three/examples/jsm/renderers/CSS2DRenderer.js';
const EARTH_RADIUS =1;
const MOON_RADIUS =1;
	//
	const cubeDiv = document.createElement( 'div' );
	cubeDiv.className = 'label';
	cubeDiv.textContent = 'Cube';
	cubeDiv.style.marginTop = '-1em';
	const cubeLabel = new CSS2DObject( cubeDiv );
	cubeLabel.position.set( 0, EARTH_RADIUS, 0 );

	const cubeMassDiv = document.createElement( 'div' );
	cubeMassDiv.className = 'label';
	cubeMassDiv.textContent = '5.97237e24 kg';
	cubeMassDiv.style.marginTop = '-1em';
	const cubeMassLabel = new CSS2DObject( cubeMassDiv );
	cubeMassLabel.position.set( 0, - 2 * EARTH_RADIUS, 0 );


	const cylinderDiv = document.createElement( 'div' );
	cylinderDiv.className = 'label';
	cylinderDiv.textContent = 'Cylinder';
	cylinderDiv.style.marginTop = '-1em';
	const cylinderLabel = new CSS2DObject( cylinderDiv );
	cylinderLabel.position.set( 0, MOON_RADIUS, 0 );


	const cylinderMassDiv = document.createElement( 'div' );
	cylinderMassDiv.className = 'label';
	cylinderMassDiv.textContent = '7.342e22 kg';
	cylinderMassDiv.style.marginTop = '-1em';
	const cylinderMassLabel = new CSS2DObject( cylinderMassDiv );
	cylinderMassLabel.position.set( 0, - 2 * MOON_RADIUS, 0 );


	//


export {cubeLabel, cubeMassLabel, cylinderLabel, cylinderMassLabel };