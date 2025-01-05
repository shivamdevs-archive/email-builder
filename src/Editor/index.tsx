import React from "react";
import articles from "../articles.json";

import { CssBaseline, ThemeProvider } from "@mui/material";

import EmailEditor, { EditorProps } from "./App";
import theme from "./theme";

export default function Editor({}: EditorProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<EmailEditor
				articles={articles}
				onChange={(design) => {
					console.log(design);
				}}
			/>
		</ThemeProvider>
	);
}
