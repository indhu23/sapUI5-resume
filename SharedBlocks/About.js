sap.ui.define(['sap/uxap/BlockBase'],
	function (BlockBase) {
		"use strict";

		var About = BlockBase.extend("resume.SharedBlocks.About", {
			metadata: {
				views: {
					Collapsed: {
						viewName: "resume.SharedBlocks.About",
						type: "XML"
					},
					Expanded: {
						viewName: "resume.SharedBlocks.About",
						type: "XML"
					}
				}
			}
		});

		return About;

	});
