import React from "react";
import ReactDOM from "react-dom/client";
import articles from "./articles.json";

import Editor from "./Editor";
import { Box } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Box p={20}>
			<Editor
				articles={articles}
				onChange={(design) => {
					console.log(design);
				}}
			/>
		</Box>
	</React.StrictMode>
);
