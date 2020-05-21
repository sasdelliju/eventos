/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ovly/controles/eventos/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});