import { World } from "./World/World.js";


//create the main function 
function main() {
    // code to set up the World App will go here
    const container = document.querySelector('#scene-container');

    // 1. Create an instance of the World app
    const world = new World(container);
    
    
    // start the animation loop
    world.start();
    
}

// call main to start the app
main();