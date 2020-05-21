sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
	"sap/m/RatingIndicator",
	"sap/ui/core/routing/History"
], function (Controller, MessageBox, MessageToast, History) {
	"use strict";
	return Controller.extend("ovly.controles.eventos.controller.View1", {
		onInit: function () {},
		onPressToast: function (oEvent) {
			//alert("apertou");
			//console.log(oEvent.getSource().getText());
			this._imprimeNoConsole(oEvent.getSource(), "text");
			MessageToast.show("Apertou");
		},
		onPressSucesso: function (oEvt) {
			//alert("apertou");
			//console.log(oEvt.getSource().getText());
			this._imprimeNoConsole(oEvt.getSource(), "text");
			MessageBox.success("Sucesso!!!");
		},
		onChangeRating: function (oControlEvent) {
			var mSettings = {
				title: "Nota"
			};
			var sNota = oControlEvent.getSource().getValue().toString();
			MessageBox.information(sNota, mSettings);
			this._imprimeNoConsole(oControlEvent.getSource(), "value");
		},
		_imprimeNoConsole: function (oManagedObject, sProperty) {
			var sPropertyValue = oManagedObject.getProperty(sProperty);
			//console.log(oButton.getText());
			console.log(sPropertyValue);
		},
		onScanSuccess: function (oEvent) {
			var oParameters = oEvent.getParameters();
			var sMessage;
			if (oParameters.format) {
				sMessage = oParameters.text + " " + oParameters.format;
			} else {
				sMessage = oParameters.text;
			}
		},

		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onBack: function (oEvent) {
			var oHistory, sPreviousHash;
			oHistory = sap.ui.core.routing.History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("View1", {}, true /*no history*/);
			}
		}
	});
});