sap.ui.define(["sap/m/MessageToast", "sap/ui/core/mvc/Controller"], function (MessageToast, Controller) {
	"use strict";

	return Controller.extend("resume.ObjectPageSection", {
		onInit: function () {
		},
		handlePressLinkedIn        : function (oEvent) {
			window.location.href = "https://www.linkedin.com/in/indhuja-balakrishnan/";
		},
		handlePressGitHub: function (oEvent) {
			window.location.href= "https://github.com/indhu23";
		},
		handlePressReact: function (oEvent) {
			window.location.href="https://indhu23.github.io/profile/";
		}
		
	});
}, true);
