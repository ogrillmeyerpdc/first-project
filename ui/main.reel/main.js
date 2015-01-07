/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super(); 
        }
    },

    handleIncAction: {
        value: function (event) {
            var value = Number(this.templateObjects.value.element.textContent);
            var value2 = Number(this.templateObjects.value2.element.textContent);
            this.templateObjects.value.element.textContent = value + value2;
        }
    },

    handleDecAction: {
        value: function (event) {
            var value = Number(this.templateObjects.val.element.textContent);
            var value2 = Number(this.templateObjects.value2.element.textContent);
            this.templateObjects.val.element.textContent = value - value2;

        }
    }

});
