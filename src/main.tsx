import React from "react";
import ReactDOM from "react-dom/client";
import articles from "./articles.json";

import { CssBaseline, ThemeProvider } from "@mui/material";

import Editor from "./App";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Editor
				articles={articles}
				onChange={(design) => {
					console.log(design);
				}}
			/>
		</ThemeProvider>
	</React.StrictMode>
);
