import React from "react";

import {
	Box,
	Button,
	Card,
	CardContent,
	CardMedia,
	Dialog,
	DialogContent,
	DialogTitle,
	IconButton,
	Input,
	Tooltip,
	Typography,
} from "@mui/material";
import { EditorMetadata } from "../../../types";
import { Close, FilterListOff } from "@mui/icons-material";

type ImportArticleDialogProps = {
	onClose: (article?: any) => void;
	metadata: EditorMetadata;
};
export default function ImportArticleDialog({
	onClose: onCloseInit,
	metadata,
}: ImportArticleDialogProps) {
	const articles = metadata.articles!;

	function onClose(article?: any) {
		onCloseInit(article);
		metadata.onArticleFilter?.({
			query: null,
			date: null,
			category: null,
			order: "latest",
		});
	}

	return (
		<Dialog
			open
			onClose={() => onClose()}
			fullWidth
			maxWidth="xl"
			PaperProps={{
				style: {
					height: "100%",
				},
			}}
		>
			<DialogTitle>
				Select Article
				<Box
					component="span"
					sx={{ position: "absolute", right: 8, top: 8 }}
				>
					<IconButton onClick={() => onClose()}>
						<Close />
					</IconButton>
				</Box>
			</DialogTitle>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const form = e.target as HTMLFormElement;
					const search = form.elements.namedItem(
						"search"
					) as HTMLInputElement;
					const date = form.elements.namedItem(
						"date"
					) as HTMLInputElement;
					const category = form.elements.namedItem(
						"category"
					) as HTMLSelectElement;
					const sort = form.elements.namedItem(
						"sort"
					) as HTMLSelectElement;
					metadata.onArticleFilter?.({
						query: search.value,
						date: date.value,
						category: category.value,
						order: sort.value as "latest" | "oldest",
					});
				}}
			>
				<Box
					display="flex"
					gap={1}
					px={2}
					pb={1}
					sx={{
						borderBottom: 1,
						borderColor: "divider",
					}}
				>
					<Input
						placeholder="Search articles"
						fullWidth
						disableUnderline
						name="search"
						sx={{
							border: 1,
							borderColor: "divider",
							borderRadius: 1,
							padding: "8px 12px",
						}}
					/>
					<Input
						type="date"
						fullWidth
						name="date"
						disableUnderline
						sx={{
							border: 1,
							flex: 1,
							borderColor: "divider",
							borderRadius: 1,
							padding: "8px 12px",
						}}
					/>
					<select
						name="category"
						style={{
							border: "1px solid #ddd",
							borderRadius: "4px",
							padding: "8px 12px",
						}}
					>
						<option value="">All Categories</option>
						{(metadata.categories || []).map((category, index) => (
							<option key={category.key} value={category.key}>
								{category.name}
							</option>
						))}
					</select>
					<select
						name="sort"
						style={{
							border: "1px solid #ddd",
							borderRadius: "4px",
							padding: "8px 12px",
						}}
					>
						<option value="latest">Latest</option>
						<option value="oldest">Oldest</option>
					</select>
					<Button
						variant="contained"
						type="submit"
						sx={{
							padding: "8px 20px",
							minWidth: 100,
						}}
					>
						Filter
					</Button>
					<Tooltip title="Reset Filters">
						<IconButton
							color="error"
							type="reset"
							sx={{
								padding: "8px",
								minWidth: 50,
								borderRadius: 1,
							}}
							onClick={() => {
								metadata.onArticleFilter?.({
									query: null,
									date: null,
									category: null,
									order: "latest",
								});
							}}
						>
							<FilterListOff />
						</IconButton>
					</Tooltip>
				</Box>
			</form>
			<DialogContent>
				{articles.length === 0 && (
					<Box
						sx={{
							m: 3,
							p: 1,
							border: "1px dashed",
							borderColor: "divider",
						}}
					>
						<Typography color="text.secondary" textAlign={"center"}>
							No article matches the filter.
						</Typography>
					</Box>
				)}
				<Box
					display="grid"
					gap={2}
					gridTemplateColumns={"repeat(auto-fit, minmax(320px, 1fr))"}
					py={2}
				>
					{articles.map((article, index) => (
						<Card
							key={index}
							onClick={() => {
								onClose(article);
								metadata.onArticleMap?.(article);
							}}
							sx={{
								"cursor": "pointer",
								"padding": 2,
								"border": 1,
								"borderColor": "divider",
								"borderRadius": 3,
								"display": "flex",
								"flexDirection": "column",
								"gap": 2,
								"transition": "transform 0.2s",
								"&:hover": {
									transform: "scale(1.025)",
								},
							}}
						>
							<CardContent
								sx={{
									p: 0,
									display: "flex",
									flexDirection: "column",
									gap: 1,
								}}
							>
								<Box
									display="flex"
									justifyContent="space-between"
									gap={1}
								>
									<Box
										display="flex"
										alignItems="center"
										justifyContent="center"
										bgcolor="primary.main"
										color="white"
										height={40}
										sx={{
											aspectRatio: "1/1",
											borderRadius: 1,
										}}
									>
										{article.category_tag}
									</Box>
									<Box flex={1}>
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
										,{" "}
										{new Date(
											article.published_at
										).toLocaleTimeString("en-GB", {
											hour: "2-digit",
											minute: "2-digit",
											hour12: true,
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
