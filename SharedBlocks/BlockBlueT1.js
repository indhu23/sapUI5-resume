sap.ui.define(['sap/uxap/BlockBase'],
	function (BlockBase) {
		"use strict";

		var BlockBlueT1 = BlockBase.extend("resume.SharedBlocks.BlockBlueT1", {
			metadata: {
				views: {
					Collapsed: {
						viewName: "resume.SharedBlocks.BlockBlueT1",
						type: "XML"
					},
					Expanded: {
						viewName: "resume.SharedBlocks.BlockBlueT1",
						type: "XML"
					}
				}
			}
		});

		return BlockBlueT1;

	});
