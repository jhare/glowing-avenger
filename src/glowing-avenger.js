/**
 *
 * @author Joe Hare <joseph.hare@gmail.com>
 */
'use strict';

var _ = require('lodash');
var PluginFactory = require('plugin-factory');

// Define the global namespace
var GlowingAvenger = function GlowingAvenger() {

	this.plugins = [];
	this.pluginFactory = new PluginFactory();

	this.initPluginRegistry = function initPluginRegistry() {
		this.pluginFactory.registerPlugins().then(function(registeredPlugins) {
			_(registeredPlugins).each(function(plugin) {
				plugin.init();	
				this.plugins.push(plugin);
			});
		});
	};
};

module.exports = GlowingAvenger;
