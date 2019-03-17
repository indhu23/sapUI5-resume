sap.ui.define(['sap/uxap/BlockBase'],
	function (BlockBase) {
		"use strict";

		var Skills = BlockBase.extend("resume.SharedBlocks.Skills", {
			metadata: {
				views: {
					Collapsed: {
						viewName: "resume.SharedBlocks.Skills",
						type: "XML"
					},
					Expanded: {
						viewName: "resume.SharedBlocks.Skills",
						type: "XML"
					}
				}
			}
		});

		return Skills;

	});
