/**
 * This module 'myappmodule' contains the 'MyApp' clas.
 *
 * @module myappmodule
 */

var $ = require('jquery');

/**
* This is my app.
*
* @class MyApp
* @constructor
*/
var MyApp = function() {
    
    /**
     * Does something awesome.
     *
     * @method doSth
     * @param {Number} arg1 first arg
     * @param {String} [arg2] second (optional) arg
     * @param {Object} [arg3]* third arg(s) (0..n)
     * @return {Object} something awesome, really
     */
	this.doSth = function(arg1, arg2, arg3) {
		return arg1 + " " + arg2 + " " + arg3;
	};
};

$(function() {
	$('body').append('hello, world!');
});
