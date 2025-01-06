import React from "react";
import articlesJSON from "./articles.json";
import template from "./template.json";
import categories from "./categories.json";

import Editor from "./Editor";
import { Box } from "@mui/material";

function App() {
	const [articles, setArticles] = React.useState<any[]>(articlesJSON);

	return (
		<Box>
			<Editor
				articles={articles}
				categories={categories}
				onArticleMap={(article) => {
					console.log(article);
				}}
				onArticleFilter={({ query, date, category, order }) => {
					console.log(query, date, category, order);
					const filteredArticles = articlesJSON.filter((article) => {
						if (
							query &&
							!article.title
								.toLowerCase()
								.includes(query.toLowerCase())
						) {
							return false;
						}
						if (
							date &&
							new Date(article.published_at).toDateString() !==
								new Date(date).toDateString()
						) {
							return false;
						}
						if (category && article.category !== category) {
							return false;
						}
						return true;
					});

					if (order === "latest") {
						filteredArticles.sort(
							(a, b) =>
								new Date(a.published_at).getTime() -
								new Date(b.published_at).getTime()
						);
					} else if (order === "oldest") {
						filteredArticles.sort(
							(a, b) =>
								new Date(b.published_at).getTime() -
								new Date(a.published_at).getTime()
						);
					}

					setArticles(filteredArticles);
				}}
				onChange={(design) => {
					console.log(design);
				}}
				onFileUpload={(file, done) => {
					console.log(file);
					let progress = 0;
					const interval = setInterval(() => {
						done({ progress });
						progress += 10;
						if (progress === 100) {
							clearInterval(interval);
							if (Math.random() > 0.5) {
								done({
									url: "https://assets.usewaypoint.com/sample-image.jpg",
								});
							} else {
								done({ error: "Upload failed" });
							}
						}
					}, 1000);
				}}
				template={template}
			/>
		</Box>
	);
}

export default App;
