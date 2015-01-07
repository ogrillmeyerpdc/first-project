/**
 * @module ui/hello-world-canvas.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class HelloWorldCanvas
 * @extends Component
 */
exports.HelloWorldCanvas = Component.specialize(/** @lends HelloWorldCanvas# */ {
    constructor: {
        value: function HelloWorldCanvas() {
            this.super();
        }
    },
    
    draw: {
        value: function() {
            var canvas = this.element.querySelector('canvas');
            var ctx = canvas.getContext("2d");
            ctx.font="20px Georgia";
            
            var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
            gradient.addColorStop("0","magenta");
            gradient.addColorStop("0.5","blue");
            gradient.addColorStop("1.0","red");
            // Fill with gradient
            ctx.fillStyle=gradient;
            
            ctx.fillText("hello", 20, 20);
        }
    }
});
