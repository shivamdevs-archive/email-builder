import React from "react";

import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Dialog,
	DialogContent,
	DialogTitle,
	Typography,
} from "@mui/material";

type ImportArticleDialogProps = {
	onClose: (article?: any) => void;
	articles: any[];
};
export default function ImportArticleDialog({
	onClose,
	articles,
}: ImportArticleDialogProps) {
	return (
		<Dialog open onClose={() => onClose()}>
			<DialogTitle>Select Article</DialogTitle>
			<DialogContent>
				<Box
					display="grid"
					gap={2}
					gridTemplateColumns={"repeat(2, minmax(40%, 1fr))"}
					padding={2}
				>
					{articles.map((article, index) => (
						<Card
							key={index}
							onClick={() => onClose(article)}
							sx={{
								"cursor": "pointer",
								"padding": 2,
								"border": 1,
								"borderColor": "divider",
								"borderRadius": 3,
								"display": "flex",
								"flexDirection": "column",
								"gap": 1,
								"transition": "transform 0.2s",
								"&:hover": {
									transform: "scale(1.05)",
								},
							}}
						>
							<CardContent sx={{ p: 0 }}>
								<Box
									display="flex"
									justifyContent="space-between"
								>
									<Box>
										<Typography
											variant="body2"
											fontWeight={600}
										>
											{article.author}
										</Typography>
										<Typography
											variant="body2"
											color="hsla(34, 100%, 50%, 1)"
											fontWeight={600}
										>
											{article.category}
										</Typography>
									</Box>
									<Typography
										variant="caption"
										color="text.secondary"
										fontSize={10}
									>
										{new Date(
											article.published_at
										).toLocaleDateString("en-GB", {
											day: "2-digit",
											month: "short",
											year: "2-digit",
										})}
									</Typography>
								</Box>
								<Typography variant="h6" fontSize={14} noWrap>
									{article.title}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										display: "-webkit-box",
										WebkitBoxOrient: "vertical",
										WebkitLineClamp: 2,
										overflow: "hidden",
									}}
								>
									{article.content}
								</Typography>
							</CardContent>
							<CardMedia
								component="img"
								sx={{
									width: "100%",
									aspectRatio: "16/9",
									borderRadius: 1,
								}}
								image={article.poster_url}
								alt={article.title}
							/>
						</Card>
					))}
				</Box>
			</DialogContent>
		</Dialog>
	);
}
