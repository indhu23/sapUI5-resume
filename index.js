sap.ui.require([
	"sap/m/Shell",
	"sap/m/App",
	"sap/m/Page",
	"sap/ui/core/ComponentContainer"
], function(
	Shell, App, Page, ComponentContainer) {
	"use strict";

	sap.ui.getCore().attachInit(function() {
		new Shell ({
			app : new App ({
				pages : [
					new Page({
						title : "UI 5 CV",
						enableScrolling : false,
						content : [
							new ComponentContainer({
								height : "100%", name : "resume",
								settings : {
									id : "resume"
								}
							})
						]
					})
				]
			})
		}).placeAt("content");
	});
});