sap.ui.define(['sap/uxap/BlockBase'],
	function (BlockBase) {
		"use strict";

		var Interests = BlockBase.extend("resume.SharedBlocks.Interests", {
			metadata: {
				views: {
					Collapsed: {
						viewName: "resume.SharedBlocks.Interests",
						type: "XML"
					},
					Expanded: {
						viewName: "resume.SharedBlocks.Interests",
						type: "XML"
					}
				}
			}
		});

		return Interests;

	});
