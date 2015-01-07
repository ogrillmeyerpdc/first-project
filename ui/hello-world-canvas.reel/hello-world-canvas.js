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
            gradient.addColorStop("0","red");
            gradient.addColorStop("0.5","green");
            gradient.addColorStop("1.0","purple");
            // Fill with gradient
            ctx.fillStyle=gradient;
            
            ctx.fillText("This is a whole bunch of text, well not really that much", 20, 20);
        }
    }
});
