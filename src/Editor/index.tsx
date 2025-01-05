import React from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";

import EmailEditor, { EditorProps } from "./App";
import theme from "./theme";

export default function Editor({ articles, onChange, template }: EditorProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<EmailEditor
				articles={articles}
				onChange={onChange}
				template={template}
			/>
		</ThemeProvider>
	);
}

export { EmailEditor, type EditorProps };
