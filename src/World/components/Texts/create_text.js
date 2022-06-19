import { Texture } from '../../../../node_modules/three/src/textures/Texture.js';
import { SpriteMaterial } from '../../../../node_modules/three/src/materials/SpriteMaterial.js';
import { Sprite } from '../../../../node_modules/three/src/objects/Sprite.js';


function makeTextSprite( message, parameters )
    {
        if ( parameters === undefined ) parameters = {};
        let  fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
        let  fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 18;
        let  borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 4;
        let  borderColor = parameters.hasOwnProperty("borderColor") ?parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
        let  backgroundColor = parameters.hasOwnProperty("backgroundColor") ?parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };
        let  textColor = parameters.hasOwnProperty("textColor") ?parameters["textColor"] : { r:0, g:0, b:0, a:1.0 };

        let  canvas = document.createElement('canvas');
        let  context = canvas.getContext('2d');
        context.font = "Bold " + fontsize + "px " + fontface;
        let  metrics = context.measureText( message );
        let  textWidth = metrics.width;

        context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
        context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";

        context.lineWidth = borderThickness;
        context.roundRect(context, borderThickness/2, borderThickness/2, (textWidth + borderThickness) * 1.1, fontsize * 1.4 + borderThickness, 8);

        context.fillStyle = "rgba("+textColor.r+", "+textColor.g+", "+textColor.b+", 1.0)";
        context.fillText( message, borderThickness, fontsize + borderThickness);
        console.log(context);

        let  texture = new Texture(canvas) 
        texture.needsUpdate = true;

        let  spriteMaterial = new SpriteMaterial( { map: texture, useScreenCoordinates: false } );
        let  sprite = new Sprite( spriteMaterial );
        sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize);
        return sprite;  
}

export { makeTextSprite } 