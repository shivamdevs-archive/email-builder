import React, { useEffect } from "react";

import { Stack, useTheme } from "@mui/material";

import {
	resetDocument,
	useDocument,
	useInspectorDrawerOpen,
} from "../documents/editor/EditorContext";

import InspectorDrawer, { INSPECTOR_DRAWER_WIDTH } from "./InspectorDrawer";
import TemplatePanel from "./TemplatePanel";
import { renderToStaticMarkup } from "@usewaypoint/email-builder";
import { EditorProps } from "../types";

function useDrawerTransition(
	cssProperty: "margin-left" | "margin-right",
	open: boolean
) {
	const { transitions } = useTheme();
	return transitions.create(cssProperty, {
		easing: !open ? transitions.easing.sharp : transitions.easing.easeOut,
		duration: !open
			? transitions.duration.leavingScreen
			: transitions.duration.enteringScreen,
	});
}

export default function Editor({
	articles,
	categories,
	onArticleFilter,
	onArticleMap,
	template,
	onChange,
	onFileUpload,
}: EditorProps) {
	const inspectorDrawerOpen = useInspectorDrawerOpen();
	const document = useDocument();

	const marginRightTransition = useDrawerTransition(
		"margin-right",
		inspectorDrawerOpen
	);

	useEffect(() => {
		if (template) {
			resetDocument(template);
		}
	}, [template]);

	useEffect(() => {
		if (onChange) {
			onChange({
				html: renderToStaticMarkup(document, { rootBlockId: "root" }),
				design: document,
			});
		}
	}, [document]);

	return (
		<>
			<InspectorDrawer
				metadata={{
					articles,
					categories,
					onArticleFilter,
					onArticleMap,
				}}
				onFileUpload={onFileUpload}
			/>

			<Stack
				sx={{
					marginRight: inspectorDrawerOpen
						? `${INSPECTOR_DRAWER_WIDTH}px`
						: 0,
					transition: [marginRightTransition].join(", "),
				}}
			>
				<TemplatePanel />
			</Stack>
		</>
	);
}
