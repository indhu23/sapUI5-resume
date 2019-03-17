sap.ui.define(['sap/uxap/BlockBase'],
	function (BlockBase) {
		"use strict";

		var Experience = BlockBase.extend("resume.SharedBlocks.Experience", {
			metadata: {
				views: {
					Collapsed: {
						viewName: "resume.SharedBlocks.Experience",
						type: "XML"
					},
					Expanded: {
						viewName: "resume.SharedBlocks.Experience",
						type: "XML"
					}
				}
			}
		});

		return Experience;

	});
