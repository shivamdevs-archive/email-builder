import React from "react";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";

import EmailEditor, { EditorProps } from "./App";
import theme from "./theme";

export default function Editor({ articles, onChange, template }: EditorProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box position="relative" bgcolor="white" overflow="hidden">
				<EmailEditor
					articles={articles}
					onChange={onChange}
					template={template}
				/>
			</Box>
		</ThemeProvider>
	);
}

export { EmailEditor, type EditorProps };
