import React, { useState } from "react";
import { setDocument, useDocument, } from "../../../documents/editor/EditorContext";
import { Box, Button, Card, CardContent, CardMedia, Divider, IconButton, Tooltip, Typography, } from "@mui/material";
import ImportArticleDialog from "./ImportArticleDialog";
import { ContentCopy } from "@mui/icons-material";
export default function ArticlesPanel({ articles }) {
    const block = useDocument();
    const [open, setOpen] = useState(false);
    const [article, setArticle] = useState(null);
    if (!articles || articles.length === 0) {
        return React.createElement("p", null, "No articles found.");
    }
    function addArticle(atBottom = false) {
        if (!article) {
            return;
        }
        const newTemplate = buildArticleTemplate(block, article, atBottom);
        setDocument(newTemplate);
    }
    let dialog = null;
    if (open) {
        dialog = (React.createElement(ImportArticleDialog, { articles: articles, onClose: (article) => {
                setOpen(false);
                if (article) {
                    setArticle(article);
                }
                else {
                    setArticle(null);
                }
            } }));
    }
    return (React.createElement(Box, { p: 2 },
        React.createElement(Typography, { variant: "h6" }, "Articles"),
        React.createElement(Typography, { variant: "body1", color: "text.secondary" }, "Please select an article to edit."),
        React.createElement(Box, { my: 3, display: "flex", justifyContent: "center" },
            React.createElement(Button, { onClick: () => setOpen(true), variant: "contained", color: "primary" }, "Import Article")),
        !article ? (React.createElement(Typography, { variant: "body2", color: "text.secondary" },
            "After selecting an article, you can choose to insert its content into the editor manually or insert the complete article as a block.",
            React.createElement("br", null),
            "We will load the article in the editor at the start or end of the document depending on your selection.")) : (React.createElement(Box, null,
            React.createElement(Card, { sx: {
                    cursor: "pointer",
                    padding: 1,
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                } },
                React.createElement(CardContent, { sx: { p: 0 } },
                    React.createElement(Box, { display: "flex", justifyContent: "space-between" },
                        React.createElement(Box, null,
                            React.createElement(Typography, { variant: "body2", fontWeight: 600 }, article.author),
                            React.createElement(Typography, { variant: "body2", color: "hsla(34, 100%, 50%, 1)", fontWeight: 600 }, article.category)),
                        React.createElement(Typography, { variant: "caption", color: "text.secondary", fontSize: 10 }, new Date(article.published_at).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "2-digit",
                        }))),
                    React.createElement(Typography, { variant: "h6", fontSize: 14, noWrap: true }, article.title),
                    React.createElement(Typography, { variant: "body2", color: "text.secondary", sx: {
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            overflow: "hidden",
                        } }, article.content)),
                React.createElement(CardMedia, { component: "img", sx: {
                        width: "100%",
                        aspectRatio: "16/9",
                        borderRadius: 1,
                    }, image: article.poster_url, alt: article.title })),
            React.createElement(Divider, { sx: { my: 2 } }),
            React.createElement(Box, { my: 2 },
                React.createElement(Typography, { variant: "body2", color: "text.secondary", mb: 1 }, "Select where to insert the article content:"),
                React.createElement(Box, { display: "flex", gap: 1 },
                    React.createElement(Button, { variant: "outlined", fullWidth: true, color: "secondary", onClick: () => addArticle() }, "Insert at Start"),
                    React.createElement(Button, { variant: "outlined", color: "success", fullWidth: true, onClick: () => addArticle(true) }, "Insert at End"))),
            React.createElement(Divider, { sx: { my: 2 } }),
            React.createElement(Box, { my: 2, display: "flex", flexDirection: "column", gap: 2, sx: {
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 1,
                    boxShadow: 1,
                    padding: 1,
                } },
                React.createElement(Typography, { variant: "body2", color: "text.secondary", mb: 1 }, "Or insert the article content manually:"),
                React.createElement(ArticlesPanelManualItem, { title: "TITLE", value: article.title }),
                React.createElement(ArticlesPanelManualItem, { title: "AUTHOR", value: article.author }),
                React.createElement(ArticlesPanelManualItem, { title: "SUMMARY", value: article.content }),
                React.createElement(ArticlesPanelManualItem, { title: "POSTER", value: article.poster_url }),
                React.createElement(ArticlesPanelManualItem, { title: "PUBLISHED ON", value: new Date(article.published_at).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                    }) }),
                React.createElement(ArticlesPanelManualItem, { title: "CATEGORY", value: article.category }),
                React.createElement(ArticlesPanelManualItem, { title: "LINK", value: article.source_url })))),
        dialog));
}
const buildArticleTemplate = (template, article, atBottom = false) => {
    const tz = Date.now();
    const articleBlock = {
        [`block-${tz}`]: {
            type: "Container",
            data: {
                style: {
                    backgroundColor: "#FFFFFF",
                    borderRadius: 8,
                    padding: {
                        top: 8,
                        bottom: 8,
                        right: 8,
                        left: 8,
                    },
                },
                props: {
                    childrenIds: [
                        `block-${tz}_title`,
                        `block_${tz}_content`,
                        `block-${tz}_column`,
                        `block-${tz}_image`,
                        `block-${tz}_button`,
                    ],
                },
            },
        },
        [`block-${tz}_title`]: {
            type: "Heading",
            data: {
                props: {
                    text: article.title,
                    level: "h3",
                },
                style: {
                    padding: {
                        top: 4,
                        bottom: 4,
                        right: 4,
                        left: 4,
                    },
                },
            },
        },
        [`block_${tz}_content`]: {
            type: "Text",
            data: {
                style: {
                    fontSize: 14,
                    fontWeight: "normal",
                    padding: {
                        top: 4,
                        bottom: 4,
                        right: 4,
                        left: 4,
                    },
                },
                props: {
                    text: article.content,
                },
            },
        },
        [`block-${tz}_column`]: {
            type: "ColumnsContainer",
            data: {
                style: {
                    padding: {
                        top: 4,
                        bottom: 4,
                        right: 4,
                        left: 4,
                    },
                },
                props: {
                    columnsCount: 2,
                    columnsGap: 16,
                    columns: [
                        {
                            childrenIds: [`block-${tz}_author`],
                        },
                        {
                            childrenIds: [`block-${tz}_published`],
                        },
                        {
                            childrenIds: [],
                        },
                    ],
                },
            },
        },
        [`block-${tz}_author`]: {
            type: "Text",
            data: {
                style: {
                    color: "#737373",
                    fontSize: 12,
                    fontWeight: "normal",
                    padding: {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                    },
                },
                props: {
                    text: `By ${article.author} in ${article.category}`,
                },
            },
        },
        [`block-${tz}_published`]: {
            type: "Text",
            data: {
                style: {
                    color: "#737373",
                    fontSize: 12,
                    fontWeight: "normal",
                    textAlign: "right",
                    padding: {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                    },
                },
                props: {
                    text: `Published on ${new Date(article.published_at).toLocaleString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                    })}`,
                },
            },
        },
        [`block-${tz}_image`]: {
            type: "Image",
            data: {
                style: {
                    padding: {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                    },
                },
                props: {
                    url: article.poster_url,
                    alt: article.title,
                    linkHref: article.source_url,
                    contentAlignment: "middle",
                },
            },
        },
        [`block-${tz}_button`]: {
            type: "Button",
            data: {
                style: {
                    fontWeight: "normal",
                    textAlign: "center",
                    padding: {
                        top: 8,
                        bottom: 8,
                        right: 8,
                        left: 8,
                    },
                },
                props: {
                    buttonStyle: "pill",
                    fullWidth: true,
                    size: "small",
                    text: "Read full Article",
                    url: article.source_url,
                },
            },
        },
    };
    template["root"].data.childrenIds = atBottom
        ? [...template["root"].data.childrenIds, `block-${tz}`]
        : [`block-${tz}`, ...template["root"].data.childrenIds];
    template = Object.assign(Object.assign({}, template), articleBlock);
    return template;
};
const ArticlesPanelManualItem = ({ title, value, }) => {
    const [copied, setCopied] = useState(false);
    return (React.createElement(Box, { display: "flex", alignItems: "center", gap: 1 },
        React.createElement(Box, { flexGrow: 1 },
            React.createElement(Typography, { variant: "body2", color: "gray", fontWeight: 600, fontSize: 10, sx: { userSelect: "none" } }, title),
            React.createElement(Typography, { variant: "body1", sx: { wordBreak: "break-word" } }, value)),
        React.createElement(Tooltip, { title: copied ? "Copied! ✓" : "Copy to clipboard" },
            React.createElement(IconButton, { onClick: () => {
                    navigator.clipboard.writeText(value);
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false);
                    }, 2000);
                }, sx: { padding: 0 } },
                React.createElement(ContentCopy, { sx: {
                        width: 16,
                        height: 16,
                    } })))));
};
//# sourceMappingURL=index.js.map