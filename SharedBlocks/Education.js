sap.ui.define(['sap/uxap/BlockBase'],
	function (BlockBase) {
		"use strict";

		var Education = BlockBase.extend("resume.SharedBlocks.Education", {
			metadata: {
				views: {
					Collapsed: {
						viewName: "resume.SharedBlocks.Education",
						type: "XML"
					},
					Expanded: {
						viewName: "resume.SharedBlocks.Education",
						type: "XML"
					}
				}
			}
		});

		return Education;

	});
